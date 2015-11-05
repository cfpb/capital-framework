// var path = require('path'),
//     fs = require('fs'),
//     async = require('async'),
//     gitStatus = require('./lib/gitStatus'),
//     componentsDir = path.join(__dirname, '../../../components');

// fs.readdir(componentsDir, function(err, components) {
//   if (err) return console.log(err);

//   components.forEach(function(component) {
//     var componentDir = componentsDir + '/' + component;
//     if (component.indexOf('cf-') !== 0 && !fs.lstatSync(componentDir).isDirectory()) return;
//     console.log(componentDir);

//     gitStatus(componentDir).then(function(result) {
//       if (!result.stdout && !result.stderr) {
//         console.log(component + ' has not been updated.');
//       } else {
//         console.log(component + ' has been updated and needs to be published!');
//       }
//     });

//   });

// });

var gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    importPlugin = require('less-plugin-npm-import'),
    path = require('path'),
    fs = require('fs'),
    componentsDir = path.join(__dirname, '../../../components');

fs.readdir(componentsDir, function(err, components) {
  if (err) return console.log(err);

  components.forEach(function(component) {
    var componentSrcDir = componentsDir + '/' + component + '/src/';
    gulp.src(componentSrcDir + component + '.less')
        .pipe($.less({
          plugins: [new importPlugin({prefix: '../node_modules/'})]
        }))
        .pipe(gulp.dest('./tmp/' + component));
  });
});
