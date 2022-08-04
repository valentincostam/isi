const { src, dest, watch } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const cleanCss = require('gulp-clean-css')
const pug = require('gulp-pug')
const uglify = require('gulp-uglify')

const css = () => {
  return src('./src/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCss())
    .pipe(dest('./docs/css'))
}

const html = () => {
  return src('./src/pug/*.pug')
    .pipe(pug())
    .pipe(dest('./docs'))
}

const js = () => {
  return src('./src/js/*.js')
    .pipe(uglify())
    .pipe(dest('./docs/js'))
}

const listen = function () {
  watch('./src/scss/*.scss', css)
  watch('./src/pug/*.pug', html)
  watch('./src/js/*.js', js)
}

exports.css = css
exports.html = html
exports.js = js
exports.listen = listen