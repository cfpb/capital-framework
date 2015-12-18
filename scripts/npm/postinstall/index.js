// After the normal `npm install` finishes, this script reads every components' 
// package.json and install any dependencies that are listed. This makes it so 
// that we don't have to keep track of dependencies in *both* components' 
// `package.json` and the larger capital-framework `package.json`.

var fs = require('fs'),
    async = require('async'),
    npmi = require('npmi'),
    path = require('path'),
    pkg = JSON.parse(fs.readFileSync('package.json', 'utf8')),
    componentsDir = path.join(__dirname, '..', '..', '..', 'src');

fs.readdir(componentsDir, function(err, components) {
  if (err) return console.log(err);
  var tasks = [];
  components.forEach(function(component){
    tasks.push(function(cb) {
      getInfo(component, cb);
    });
  });
  async.parallel(tasks, function(err, results) {
    var deps = {},
        dep;
    results.forEach(function(component) {
      if (!component || !component.dependencies) return;
      var componentDeps = component.dependencies;
      Object.keys(componentDeps).forEach(function(dep) {
        // Ignore CF components.
        if (dep.indexOf('cf-') === 0) return;
        deps[dep] = componentDeps[dep];
      });
    });
    for (dep in deps) {
      installDep(dep, deps[dep]);
    }
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

function installDep(name, version) {
  npmi({name: name, version: version}, function (err, result) {
    if (err) return console.log(err);
    console.log(name + '@' + version + ' installed successfully');
  });
}
