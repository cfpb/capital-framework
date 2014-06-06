---
layout: default
title:  "Repository status"
parent:
  name: "About the components"
  url: "contributing/#current-open-pull-requests"
---

<table class="repo-table">
    <thead>
        <tr>
            <th>Repository</th>
            <th>Open issues</th>
            <th>Open PRs</th>
            <th>Current release</th>
            <th>Commits since current release</th>
        </tr>
    </thead>
    <tbody>

    </tbody>
</table>

<script src="{{ site.baseurl }}/assets/js/jquery-1.11.0.min.js"></script>
<script src="//cdn.jsdelivr.net/jstorage/0.1/jstorage.min.js"></script>
<script src="https://cdn.rawgit.com/oauth-io/oauth-js/master/dist/oauth.min.js"></script>
<script>
function apiURL(url, params) {
    if (params === undefined) {
        params = "";
    }
    API_URL = "https://api.github.com"

    return API_URL + url + "?access_token=" + $.jStorage.get("github_key") + params
}

function loadData() {
  var repoList = [
    'cf-buttons',
    'cf-colors',
    'cf-expandables',
    'cf-forms',
    'cf-grid',
    'cf-icons',
    'cf-pagination',
    'cf-typography',
    //'cf-tabs', repos with no commits are currently problematic
    //'cf-tables',
    'capital-framework',
    'cf-demo',
    'cf-component-demo',
    'cf-grunt-config'
  ];

  $.each(repoList, function(key, name) {
    console.log("Outputting info for " + name);

    // Create row
    $('.repo-table tbody').append('<tr class="repo-table_row ' + name + '"></tr>');

    // Output repo name
    $('.' + name).append('<th><a href="https://github.com/cfpb/' + name + '">' + name + '</a></th>');

    // Issues API call
    $.getJSON(apiURL('/repos/cfpb/' + name + '/issues'), function(data) {
      // Output issue count
      $('.' + name).append('<td><a href="https://github.com/cfpb/' + name + '/issues">' + data.length + '</a></td>');
      
      // Count PRs
      var prCount = 0;
      $.each(data, function(issue) {
        if (issue.pull_request) {
          prCount++;
        }
      });
      $('.' + name).append('<td><a href="https://github.com/cfpb/' + name + '/pulls">' + prCount + '</a></td>');
      
      // Tags API call
      $.getJSON(apiURL('/repos/cfpb/' + name + '/tags'), function(tags) {
        if (tags.length) {
          console.log(tags);
          // Output most recent tag
          $('.' + name).append('<td><a href="https://github.com/cfpb/' + name + '/releases/tag/' + tags[0].name + '">' + tags[0].name + '</a></td>');

          var mostRecentTagSHA = tags[0].commit.sha;

          // Determine number of commits since most recent tag
          $.getJSON(apiURL('/repos/cfpb/' + name + '/commits'), function(commits) {
            if (commits.length) {
              console.log(commits);
              var commitsSinceTag = 0,
                  i = 0;
              while (commits[i].sha != mostRecentTagSHA) {
                commitsSinceTag++;
                i++;
              }
              $('.' + name).append('<td><a href="https://github.com/cfpb/' + name + '/commits">' + commitsSinceTag + '</a></td>');
            } // end if commits check
          }); // end commits API callback
        } else {
          // if repo has no tags, output 'n/a'
          $('.' + name).append('<td>n/a</td>');
        } // end if tags check
      }); // end tags API callback
    }); // end issues API callback
  }); // end each repo loop
} // end loadData

jQuery(function($) {
  // AU-THEN-TI-CATE

  OAuth.initialize('LWajr2F90vtJiWka2aWoA8RbAkQ');

  if ($.jStorage.get("github_key") === null) {
      OAuth.popup('github', function(err, result) {
          $.jStorage.set("github_key", result.access_token);
          debugger
          loadData();
      });
  } else {
      loadData();
  }
}); // end ready
</script>
