'use strict';

var fs = require( 'fs' );
var glob = require( 'glob' );

/**
 * Set up file paths
 */
var loc = {
  src:  './src',
  dist: './dist',
  lib:  './node_modules', // eslint-disable-line no-sync, no-inline-comments, max-len
  test: './test'
};

module.exports = {
  pkg:    JSON.parse( fs.readFileSync( 'package.json' ) ), // eslint-disable-line no-sync, no-inline-comments, max-len
  banner:
      '/*!\n' +
      ' *  <%= pkg.name %> - v<%= pkg.version %>\n' +
      ' *  <%= pkg.homepage %>\n' +
      ' *  Licensed <%= pkg.license %> by Consumer Financial Protection Bureau christopher.contolini@cfpb.gov\n' +
      ' */',
  lint: {
    src: [
      loc.src + '/static/js/**/*.js',
      loc.test + '/unit_tests/**/*.js',
      loc.test + '/browser_tests/**/*.js'
    ],
    gulp: [
      'gulpfile.js',
      'gulp/**/*.js'
    ]
  },
  test: {
    src:   loc.src + '/static/js/**/*.js',
    tests: loc.test
  },
  clean: {
    dest: [loc.dist, './_includes/usage/']
  },
  styles: {
    cwd:      loc.src + '/static/css',
    src:      '/main.less',
    dest:     loc.dist + '/static/css',
    settings: {
      paths: glob.sync(loc.lib + '/cf-*/src/'),
      compress: true
    }
  },
  scripts: {
    src: [
      loc.src + '/static/js/main.js'
    ],
    dest: loc.dist + '/static/js/',
    name: 'main.js'
  },
  images: {
    src:  loc.src + '/static/img/**',
    dest: loc.dist + '/static/img'
  },
  copy: {
    files: {
      src: [
        loc.src + '/**/*.html',
        loc.src + '/**/*.pdf',
        loc.src + '/_*/**/*',
        loc.src + '/robots.txt',
        loc.src + '/favicon.ico',
        '!' + loc.lib + '/**/*.html'
      ],
      dest: loc.dist
    },
    icons: {
      src:  loc.lib + '/cf-icons/src/fonts/*',
      dest: loc.dist + '/static/fonts/'
    },
    vendorjs: {
      src: [
        loc.lib + '/box-sizing-polyfill/boxsizing.htc',
        loc.lib + '/html5shiv/dist/html5shiv-printshiv.min.js'
      ],
      dest: loc.dist + '/static/js/'
    }
  },
  usage: {
    files: {
      src: [
        loc.lib + '/cf-buttons/usage.md',
        loc.lib + '/cf-core/usage.md',
        loc.lib + '/cf-expandables/usage.md',
        loc.lib + '/cf-forms/usage.md',
        loc.lib + '/cf-grid/usage.md',
        loc.lib + '/cf-icons/usage.md',
        loc.lib + '/cf-layout/usage.md',
        loc.lib + '/cf-pagination/usage.md',
        loc.lib + '/cf-typography/usage.md',
        loc.lib + '/cf-tables/usage.md'
      ],
      dest: './_includes/usage/'
    }
  }
};
