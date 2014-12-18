// Count all features included in the test page.
$('.feature-list').append(
  '<section class="feature-list_item block block__padded-top block__border-top">' +
  '<h1>jQuery</h1>' +
  '<p>jQuery is working and counts a total of ' +
  '<strong>' + $('.feature-list_item').size() + '</strong> ' +
  'cf-components.</p>' +
  '</section>'
);
