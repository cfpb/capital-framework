---
layout: default
title:  "Repository status"
parent:
  name: "About the components"
  url: "contributing/#current-open-pull-requests"
---

<div class="auth-instructions">
    <p>
        Please authenticate with GitHub to view this page.
        This app only reads public repository data.
        You are not asked to give write access to anything.
    </p>
    <p>
        If you haven't been presented with the authentication dialogue,
        please check to make sure that you aren't blocking popups.
    </p>
</div>

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

    var row;

    // Start building row
    row = '<tr class="repo-table_row ' + name + '">';

    var repoURL = 'https://github.com/cfpb/' + name;

    // Add repo name
    row += '<th><a href="' + repoURL + '">' + name + '</a></th>';

    // Issues API call
    $.ajax({
      url: apiURL('/repos/cfpb/' + name + '/issues'),
      async: false,
      dataType: 'json',
      success: function(data) {
        // Output issue count
        row += '<td><a href="' + repoURL + '/issues">' + data.length + '</a></td>';
        
        // Count PRs
        var prCount = 0;
        $.each(data, function(issue) {
          if (issue.pull_request) {
            prCount++;
          }
        });
        row += '<td><a href="' + repoURL + '/pulls">' + prCount + '</a></td>';
        
        // Tags API call
        $.ajax({
          url: apiURL('/repos/cfpb/' + name + '/tags'),
          async: false,
          dataType: 'json',
          success: function(tags) {
            if (tags.length) {
              // Output most recent tag
              row += '<td><a href="' + repoURL + '/releases/tag/' + tags[0].name + '">' + tags[0].name + '</a></td>';

              var mostRecentTagSHA = tags[0].commit.sha;

              // Determine number of commits since most recent tag
              $.ajax({
                url: apiURL('/repos/cfpb/' + name + '/commits'),
                async: false,
                dataType: 'json',
                success: function(commits) {
                  if (commits.length) {
                    var commitsSinceTag = 0,
                        i = 0;
                    while (commits[i].sha != mostRecentTagSHA) {
                      commitsSinceTag++;
                      i++;
                    }
                    row += '<td><a href="' + repoURL + '/commits">' + commitsSinceTag + '</a></td>';
                  } // end if commits check
                } // end commits API call success function
              }); // end commits API request
            } else {
              // if repo has no tags, output 'n/a'
              row += '<td>n/a</td>';
            } // end if tags check
          } // end tags API call success function
        }); // end tags API request
      } // end issues API call success function
    }); // end issues API request
    
    // Close row
    row += '</tr>';

    // Append row
    $('.repo-table tbody').append(row);
  }); // end each repo loop
} // end loadData

jQuery(function($) {
  // AU-THEN-TI-CATE

  OAuth.initialize('LWajr2F90vtJiWka2aWoA8RbAkQ');

  if ($.jStorage.get("github_key") === null) {
    $(".auth-instructions").slideDown();
    OAuth.popup('github', function(err, result) {
      $.jStorage.set("github_key", result.access_token);
      $(".auth-instructions").slideUp();
      loadData();
    });
  } else {
    loadData();
  }
}); // end ready
</script>
