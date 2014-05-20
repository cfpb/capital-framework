---
layout: default
title:  "Open pull requests"
parent:
  name: "About the components"
  url: "contributing/#current-open-pull-requests"
---


<!-- <ul>
  <li><span data-user="cfpb" data-repo="cf-buttons"></span> - cf-buttons</li>
  <li><span data-user="cfpb" data-repo="cf-colors"></span> - cf-colors</li>
  <li><span data-user="cfpb" data-repo="cf-expandables"></span> - cf-expandables</li>
  <li><span data-user="cfpb" data-repo="cf-forms"></span> - cf-forms</li>
  <li><span data-user="cfpb" data-repo="cf-grid"></span> - cf-grid</li>
  <li><span data-user="cfpb" data-repo="cf-icons"></span> - cf-icons</li>
  <li><span data-user="cfpb" data-repo="cf-pagination"></span> - cf-pagination</li>
  <li><span data-user="cfpb" data-repo="cf-typography"></span> - cf-typography</li>
  <li><span data-user="cfpb" data-repo="cf-tabs"></span> - cf-tabs</li>
  <li><span data-user="cfpb" data-repo="cf-tables"></span> - cf-tables</li>
  <li><span data-user="cfpb" data-repo="capital-framework"></span> - capital-framework</li>
  <li><span data-user="cfpb" data-repo="cf-demo"></span> - cf-demo</li>
  <li><span data-user="cfpb" data-repo="cf-component-demo"></span> - cf-component-demo</li>
  <li><span data-user="cfpb" data-repo="cf-grunt-config"></span> - cf-grunt-config</li>
</ul> -->

<table class="repo-table">
    <thead>
        <tr>
            <th>Repo</th>
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
<script src="{{ site.baseurl }}/assets/js/jquery-pullrequests.min.js"></script>
<script>
jQuery(function($) {
  //$('[data-user][data-repo]').pullrequests();

  var repoList = [
    'cf-buttons',
    'cf-colors',
    'cf-expandables',
    'cf-forms',
    'cf-grid',
    'cf-icons',
    'cf-pagination',
    'cf-typography',
    'cf-tabs',
    'cf-tables',
    'capital-framework',
    'cf-demo',
    'cf-component-demo',
    'cf-grunt-config'
  ];
  //var items = [];

  //$.getJSON( 'https://api.github.com/repos/cfpb/' + repoList[0], function( data ) {
  $.each(repoList, function(key, name) {
    console.log("Outputting info for " + name);

    // Create row
    $('.repo-table tbody').html('<tr class="repo-table_row ' + name + '"></tr>');

    // Output repo name
    $('.' + name).append('<th><a href="https://github.com/cfpb/' + name + '">' + name + '</a></th>');

    // Issues API call
    $.getJSON('https://api.github.com/repos/cfpb/' + name + '/issues', function(data) {
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
      $.getJSON('https://api.github.com/repos/cfpb/' + name + '/tags', function(tags) {
        if (tags.length) {
          console.log(tags);
          // Output most recent tag
          $('.' + name).append('<td><a href="https://github.com/cfpb/' + name + '/releases/tag/' + tags[0].name + '">' + tags[0].name + '</a></td>');

          var mostRecentTagSHA = tags[0].commit.sha;
        }

        // Determine number of commits since most recent tag
        $.getJSON('https://api.github.com/repos/cfpb/' + name + '/commits', function(commits) {
          //console.log(commits);
          var commitsSinceTag = 0,
              i = 0;
          while (commits[i].sha != mostRecentTagSHA) {
            commitsSinceTag++;
            i++;
          }
          $('.' + name).append('<td><a href="https://github.com/cfpb/' + name + '/commits">' + commitsSinceTag + '</a></td>');
        }); // end commits API callback
      }); // end tags API callback
    }); // end issues API callback
  }); // end each repo loop
}); // end ready
</script>
