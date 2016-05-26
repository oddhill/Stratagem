var gulp = require('gulp')
var sass = require('gulp-sass')
var eslint = require('gulp-eslint')
var scsslint = require('gulp-scss-lint')
var svg2png = require('gulp-svg2png')
var browserify = require('browserify')
var shim = require('browserify-shim')
var babelify = require('babelify')
var cssGlobbing = require('gulp-css-globbing')
var source = require('vinyl-source-stream')

// babel
gulp.task('browserify', function () {
  var b = browserify({
    basedir: './js',
    entries: './main.js'
  })

  b.transform(babelify, {presets: ['es2015']})
  b.transform(shim, {global: true})

  return b.bundle()
    .on('error', function (err) {
      console.log(err.message)
      this.emit('end')
    })
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./dist/js'))
})

// svg2png
gulp.task('svg2png', function () {
  gulp.src('./graphics/**/*.svg')
    .pipe(svg2png())
    .pipe(gulp.dest('./graphics'))
})

// Compile sass
gulp.task('sass', function () {
  return gulp.src(['./scss/main.scss', './scss/print.scss'])
    .pipe(cssGlobbing({
      extensions: ['.scss']
    }))
    .pipe(sass({
      includePaths: [
        'bower_components/bourbon/app/assets/stylesheets',
        'bower_components/neat/app/assets/stylesheets',
        'bower_components/stratagem',
        'bower_components/normalize-css/'
      ]
    }).on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'))
})

// Lint sass
gulp.task('scss-lint', function () {
  return gulp.src(['./scss/**/*.scss', '!./scss/print.scss', '!scss/normalize.scss', '!scss/vendor/**/*'])
    .pipe(scsslint())
})

// Jshint
gulp.task('lint', function () {
  return gulp.src('./js/**/*.js')
    .pipe(eslint())
    .pipe(eslint.format())
})

// Watch .scss and .js
gulp.task('watch', function () {
  gulp.watch('./scss/**/*.scss', ['scss-lint', 'sass'])
  gulp.watch('./js/**/*.js', ['lint', 'browserify'])
})

// Set default task
gulp.task('default', ['watch'])
