module.exports = function(grunt) {

  'use strict';

  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);

  var path = require('path');

  // Allows a `--quiet` flag to be passed to Grunt from the command-line.
  // If the flag is present the value is true, otherwise it is false.
  // This flag can be used to, for example, suppress warning output
  // from linters.
  var env = {
    quiet: grunt.option('quiet') ? true : false
  };

  var config = {

    /**
     * Pull in the package.json file so we can read its metadata.
     */
    pkg: grunt.file.readJSON('bower.json'),

    /**
     * Set some src and dist location variables.
     */
    loc: {
      src: 'static',
      dist: 'dist'
    },

    /**
     * Concat: https://github.com/gruntjs/grunt-contrib-concat
     *
     * Concatenate cf-* Less files prior to compiling them.
     */
    concat: {
      js: {
        src: [
          '<%= loc.src %>/vendor/jquery/dist/jquery.js',
          '<%= loc.src %>/vendor/jquery.easing/js/jquery.easing.js',
          '<%= loc.src %>/vendor/cf-*/src/js/*.js',
          '<%= loc.src %>/js/app.js'
        ],
        dest: '<%= loc.dist %>/capital-framework.js'
      }
    },

    /**
     * Less: https://github.com/gruntjs/grunt-contrib-less
     *
     * Compile Less files to CSS.
     */
    less: {
      internal: {
        options: {
          paths: grunt.file.expand('vendor/**/'),
        },
        files: {
          '<%= loc.src %>/css/main.css': ['<%= loc.src %>/css/main.less']
        }
      },
      dist: {
        options: {
          paths: grunt.file.expand('.'),
        },
        files: {
          '<%= loc.dist %>/capital-framework.css': ['<%= loc.src %>/vendor/capital-framework/src/capital-framework-generated.less']
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
        // Prefix `<%= loc.src %>/css/main.css` and overwrite.
        expand: true,
        src: ['<%= loc.src %>/css/main.css']
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
      bodyScripts: {
        src: '<%= loc.dist %>/capital-framework.js',
        dest: '<%= loc.dist %>/capital-framework.min.js'
      }
    },

    /**
     * Banner: https://github.com/mattstyles/grunt-banner
     *
     * Here's a banner with some template variables.
     * We'll be inserting it at the top of minified <%= loc.src %>.
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
          src: ['<%= loc.dist %>/*.css']
        }
      },
      js: {
        options: {
          position: 'top',
          banner: '<%%= banner %%>',
          linebreak: true
        },
        files: {
          src: '<%= loc.dist %>/*.js'
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
          '<%= loc.dist %>/capital-framework.min.css': ['<%= loc.dist %>/capital-framework.css'],
        }
      },
      'ie-alternate': {
        options: {
          processImport: false
        },
        files: {
          '<%= loc.dist %>/capital-framework.ie.min.css': ['<%= loc.dist %>/capital-framework.ie.css'],
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
          '<%= loc.dist %>/capital-framework.ie.css': '<%= loc.dist %>/capital-framework.css'
        }
      }
    },

    /**
     * Copy: https://github.com/gruntjs/grunt-contrib-copy
     *
     * Copy files and folders.
     */
    copy: {
      fonts: {
        files: [
          {
            expand: true,
            flatten: true,
            src: [
              // Fonts
              '<%= loc.src %>/vendor/cf-icons/src/fonts/*'
            ],
            dest: '<%= loc.src %>/fonts'
          }
        ]
      },
      // The easiest way to resolve the @import paths is to just copy the source
      // file to the vendor folder to emulate the location it will be in when
      // end-users install the file.
      source: {
        files: [
          {
            src: 'src/capital-framework-generated.less',
            dest: '<%= loc.src %>/vendor/capital-framework/src/capital-framework-generated.less'
          }
        ]
      },
      archive: {
        files: [
          {
            src: 'releases/capital-framework-<%= pkg.version %>.zip',
            dest: 'releases/capital-framework-latest.zip'
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
          archive: 'releases/capital-framework-<%= pkg.version %>.zip'
        },
        files: [
          {expand: true, cwd: '<%= loc.dist %>', src: ['**']}
        ]
      }
    },

    /**
     * Lint the JavaScript.
     */
    lintjs: {
      /**
       * Validate files with ESLint.
       * https://www.npmjs.com/package/grunt-contrib-eslint
       */
      eslint: {
        options: {
          quiet: env.quiet
        },
        src: [
          // 'Gruntfile.js', // Uncomment to lint the Gruntfile.
          '<%= loc.src %>/js/app.js'
        ]
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
               '<%= loc.src %>/css/**/*.less',
               '<%= loc.src %>/js/app.js'],
      tasks: ['css', 'js'],
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
  grunt.registerTask('css', ['copy:source', 'less', 'autoprefixer', 'legacssy', 'cssmin']);
  grunt.registerTask('js', ['concat:js', 'uglify']);
  grunt.registerTask('test', ['lintjs']);
  grunt.registerMultiTask('lintjs', 'Lint the JavaScript', function(){
    grunt.config.set(this.target, this.data);
    grunt.task.run(this.target);
  });
  grunt.registerTask('default', ['test', 'css', 'js', 'copy:fonts', 'compress', 'copy:archive']);
};
