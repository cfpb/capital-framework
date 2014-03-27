

No wiring is necessary if you've added a new Capital Framework component to
your cf-demo project or to another Capital Framework component.
You can begin using its Less variables and mixins in your Less file immediately.
Likewise you can use its JavaScript files immediately.
This is possible because the default `grunt` task will combine
[all Less files](https://github.com/cfpb/cf-grunt-config/blob/master/tasks/options/concat.js#L5)
and [all JavaScript](https://github.com/cfpb/cf-demo/blob/master/Gruntfile.js#L53)
files together that exist within folders matching `src/vendor/cf-*/*.less` and
`src/vendor/cf-*/*.js`,
and [compiles](https://github.com/cfpb/cf-grunt-config/blob/master/tasks/options/less.js#L12)
and [concatenates](https://github.com/cfpb/cf-expandables/blob/gh-pages/Gruntfile.js#L92)
them as one.

_Note that Capital Framework components have not quite fully transitioned to
using this pattern for JavaScript files._

If you need to add a third party component then you'll need to wire up the
assets for your particular use case.
Begin by following the above models for Less and JavaScript files.
This means updating the concat or uglify tasks to point to the assets that
you want to be included.
When working with cf-demo you will need to import any Less files into your own
Less file as seen in
[`cf-demo/src/css/main.less`](https://github.com/cfpb/cf-demo/blob/master/src/static/css/main.less).
