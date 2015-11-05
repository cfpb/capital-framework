var fs = require('fs'),
    async = require('async'),
    pkg = JSON.parse(fs.readFileSync('package.json', 'utf8')),
    componentsDir = './components';

fs.readdir(componentsDir, function(err, components) {
  if (err) return console.log(err);
  var tasks = [];
  components.forEach(function(component){
    tasks.push(function(cb) {
      getInfo(component, cb);
    });
  });
  async.parallel(tasks, function(err, results) {
    var deps = {};
    results.forEach(function(component) {
      if (!component) return;
      deps[component.name] = component.version;
    });
    pkg.dependencies = deps;
    console.log(pkg);
  });
});

function getInfo(component, cb) {
  if (component.indexOf('cf-') === 0) {
    var manifest = componentsDir + '/' + component + '/package.json';
    if (fs.existsSync(manifest)) {
      return fs.readFile(manifest, function(err, data) {
        if (err) return console.log(err);
        var json = JSON.parse(data);
        cb(null, json);
      });
    }
  } else {
    cb(null, null);
  }
}
