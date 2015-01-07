module.exports = function(grunt) {

  'use strict';

  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);

  var path = require('path');
  var config = {

    /**
     * Pull in the package.json file so we can read its metadata.
     */
    pkg: grunt.file.readJSON('bower.json'),

    /**
     * Bower: https://github.com/yatskevich/grunt-bower-task
     *
     * Install Bower packages and migrate assets.
     */
    bower: {
      install: {
        options: {
          targetDir: './vendor/',
          install: true,
          verbose: true,
          cleanBowerDir: true,
          cleanTargetDir: true,
          layout: function(type, component) {
            if (type === 'img') {
              return path.join('../assets/img');
            } else if (type === 'fonts') {
              return path.join('../assets/fonts');
            } else {
              return path.join(component);
            }
          }
        }
      }
    },

    /**
     * Concat: https://github.com/gruntjs/grunt-contrib-concat
     *
     * Concatenate cf-* Less files prior to compiling them.
     */
    concat: {
      'cf-less': {
        src: [
          'vendor/cf-*/*.less',
          '!vendor/cf-core/*.less',
          'vendor/cf-core/cf-core.less',
          '!vendor/cf-concat/cf.less'
        ],
        dest: 'vendor/cf-concat/cf.less',
      },
      bodyScripts: {
        src: [
          'vendor/jquery/jquery.js',
          'vendor/jquery.easing/jquery.easing.js',
          'vendor/cf-*/*.js',
          'assets/js/app.js'
        ],
        dest: 'assets/js/main.js'
      }
    },

    /**
     * Less: https://github.com/gruntjs/grunt-contrib-less
     *
     * Compile Less files to CSS.
     */
    less: {
      main: {
        options: {
          paths: grunt.file.expand('vendor/**/'),
        },
        files: {
          'assets/css/main.css': ['assets/css/main.less']
        }
      }
    },

    /**
     * Autoprefixer: https://github.com/nDmitry/grunt-autoprefixer
     *
     * Parse CSS and add vendor-prefixed CSS properties using the Can I Use database.
     */
    autoprefixer: {
      options: {
        // Options we might want to enable in the future.
        diff: false,
        map: false
      },
      main: {
        // Prefix `assets/css/main.css` and overwrite.
        expand: true,
        src: ['assets/css/main.css']
      },
    },

    /**
     * Uglify: https://github.com/gruntjs/grunt-contrib-uglify
     *
     * Minify JS files.
     * Make sure to add any other JS libraries/files you'll be using.
     * You can exclude files with the ! pattern.
     */
    uglify: {
      options: {
        preserveComments: 'some'
      },
      // headScripts: {
      //   src: 'vendor/html5shiv/html5shiv-printshiv.js',
      //   dest: 'assets/js/html5shiv-printshiv.js'
      // },
      bodyScripts: {
        src: ['assets/js/main.js'],
        dest: 'assets/js/main.min.js'
      }
    },

    /**
     * Banner: https://github.com/mattstyles/grunt-banner
     *
     * Here's a banner with some template variables.
     * We'll be inserting it at the top of minified assets.
     */
    banner:
      '/*!\n' +
      ' *              ad$$             $$\n' +
      ' *             d$"               $$\n' +
      ' *             $$                $$\n' +
      ' *   ,adPYba,  $$$$$ $b,dPYba,   $$,dPYba,\n' +
      ' *  aP\'    \'$: $$    $$P\'   \'$a  $$P\'   \'$a\n' +
      ' *  $(         $$    $$(     )$  $$(     )$\n' +
      ' *  "b,    ,$: $$    $$b,   ,$"  $$b,   ,$"\n' +
      ' *   `"Ybd$"\'  $$    $$`YbdP"\'   $$`Ybd$"\'\n' +
      ' *                   $$\n' +
      ' *                   $$\n' +
      ' *                   ""\n' +
      ' *\n' +
      ' *  <%%= pkg.name %%> - v<%%= pkg.version %%>\n' +
      ' *  <%%= pkg.homepage %%>' +
      ' *  A public domain work of the Consumer Financial Protection Bureau\n' +
      ' */',

    usebanner: {
      css: {
        options: {
          position: 'top',
          banner: '<%%= banner %%>',
          linebreak: true
        },
        files: {
          src: ['assets/css/*.min.css']
        }
      },
      js: {
        options: {
          position: 'top',
          banner: '<%%= banner %%>',
          linebreak: true
        },
        files: {
          src: ['assets/js/*.min.js']
        }
      }
    },

    /**
     * CSS Min: https://github.com/gruntjs/grunt-contrib-cssmin
     *
     * Compress CSS files.
     */
    cssmin: {
      main: {
        options: {
          processImport: false
        },
        files: {
          'assets/css/main.min.css': ['assets/css/main.css'],
        }
      },
      'ie-alternate': {
        options: {
          processImport: false
        },
        files: {
          'assets/css/main.ie.min.css': ['assets/css/main.ie.css'],
        }
      }
    },

    /**
     * Legacssy: https://github.com/robinpokorny/grunt-legacssy
     *
     * Fix your CSS for legacy browsers.
     */
    legacssy: {
      'ie-alternate': {
        options: {
          // Flatten all media queries with a min-width over 960 or lower.
          // All media queries over 960 will be excluded fromt he stylesheet.
          // EM calculation: 960 / 16 = 60
          legacyWidth: 60
        },
        files: {
          'assets/css/main.ie.css': 'assets/css/main.css'
        }
      }
    },

    /**
     * Copy: https://github.com/gruntjs/grunt-contrib-copy
     *
     * Copy files and folders.
     */
    copy: {
      vendor: {
        files:
        [
          {
            expand: true,
            cwd: '',
            src: [
              // Only include vendor files that we use independently
              'vendor/html5shiv/html5shiv-printshiv.min.js',
              'vendor/box-sizing-polyfill/boxsizing.htc'
            ],
            dest: 'assets'
          }
        ]
      }
    },

    /**
    * Compress: https://github.com/gruntjs/grunt-contrib-compress
    *
    * Compress the dist directory so that it can be downloaded as a zip
    */

    compress: {
      main: {
        options: {
          archive: 'assets/cf.zip'
        },
        files: [
          {expand: true, cwd: 'build/dist/', src: ['**'], dest: 'capital-framework/'}
        ]
      }
    },

    /**
     * JSHint: https://github.com/gruntjs/grunt-contrib-jshint
     *
     * Validate files with JSHint.
     * Below are options that conform to idiomatic.js standards.
     * Feel free to add/remove your favorites: http://www.jshint.com/docs/#options
     */
    jshint: {
      options: {
        camelcase: false,
        curly: true,
        forin: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        quotmark: true,
        sub: true,
        boss: true,
        strict: true,
        evil: true,
        eqnull: true,
        browser: true,
        plusplus: false,
        globals: {
          jQuery: true,
          $: true,
          module: true,
          require: true,
          define: true,
          console: true,
          EventEmitter: true
        }
      },
      all: ['assets/js/main.js']
    },

    /**
     * Shell: https://github.com/sindresorhus/grunt-shell
     *
     * Run shell commands.
     * For running and executing Jekyll tasks
     */

    shell: {
      jekyllBuild : {
        command : 'jekyll build'
      },
      jekyllServe : {
        command : 'jekyll serve'
      }
    },

    /**
     * Watch: https://github.com/gruntjs/grunt-contrib-watch
     *
     * Run predefined tasks whenever watched file patterns are added, changed or deleted.
     * Add files to monitor below.
     */

    watch: {
      files: [ 'Gruntfile.js',
               'assets/css/**/*.less',
               'assets/js/app.js'],
      tasks: ['cssdev', 'jsdev'],
      options: {
        spawn: false,
        interrupt: true,
        atBegin : true,
        livereload : true
      },
    }

  };

  /**
   * Initialize a configuration object for the current project.
   */
  grunt.initConfig(config);

  /**
   * Create custom task aliases and combinations.
   */
  grunt.registerTask('vendor', ['bower:install', 'concat:cf-less']);
  grunt.registerTask('cssdev', ['less', 'autoprefixer', 'legacssy', 'cssmin']);
  grunt.registerTask('jsdev', ['concat:bodyScripts', 'uglify']);
  grunt.registerTask('default', ['cssdev', 'jsdev', 'copy:vendor', 'compress']);
  grunt.registerTask('test', ['jshint']);
};