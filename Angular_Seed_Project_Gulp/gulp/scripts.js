'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');
var gulp = require('gulp');
var webpack = require('webpack-stream');

var browserSync = require('browser-sync');

var $ = require('gulp-load-plugins')();
var  angularFilesort = require('gulp-angular-filesort');


gulp.task('scripts-reload', function() {
  return buildScripts()
    .pipe(browserSync.stream());
});

gulp.task('scripts', function() {
  return buildScripts();
});

function buildScripts() {
    return gulp.src(path.join(conf.paths.src, '/app/**/*.js'))
    .pipe($.eslint())
    .pipe($.eslint.format())
    .pipe($.size())
    // .pipe(angularFilesort()).on('error', conf.errorHandler('AngularFilesort'))
    .pipe(webpack(require('../webpack.config.js')));
}
