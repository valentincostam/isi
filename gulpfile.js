'use strict';

var gulp         = require('gulp'),
    concat       = require('gulp-concat'),
    pug          = require('gulp-pug'),
    cleancss     = require('gulp-clean-css'),
    autoprefixer = require('autoprefixer'),
    postcss      = require('gulp-postcss'),
    sass         = require('gulp-sass'),
    uglify       = require('gulp-uglify'),
    browserSync  = require('browser-sync').create();

gulp.task('scss', function () {
  return gulp.src('./src/scss/*.scss')
    .pipe(sass({ includePaths: ['./src/scss'] }).on('error', sass.logError))
    .pipe(postcss([autoprefixer()]))
    .pipe(cleancss())
    .pipe(gulp.dest('./dist/css'))
    .pipe(browserSync.stream());
});

gulp.task('pug', function () {
  return gulp.src('./src/pug/*.pug')
    .pipe(pug({ pretty: true }))
    .pipe(gulp.dest('./dist'))
});

gulp.task('js', function () {
  return gulp.src('./src/js/*.js')
    .pipe(concat('main.min.js'))
    //.pipe(uglify())
    .pipe(gulp.dest('./dist/js'))
});

gulp.task('pug-watch', ['pug'], function (done) {
  browserSync.reload();
  done();
});

gulp.task('js-watch', ['js'], function (done) {
  browserSync.reload();
  done();
});

gulp.task('serve', ['scss', 'js', 'pug'], function() {
  browserSync.init({ server: "./dist" });
  gulp.watch('./src/scss/*.scss', ['scss']);
  gulp.watch('./src/js/*.js', ['js-watch']);
  gulp.watch('./src/pug/*.pug', ['pug-watch']);
});

gulp.task('default', ['serve']);