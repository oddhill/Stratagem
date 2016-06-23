var gulp = require('gulp')
var sass = require('gulp-sass')
var cssGlobbing = require('gulp-css-globbing')

// Compile sass
gulp.task('sass', function () {
  return gulp.src(['./main.scss'])
    .pipe(cssGlobbing({
      extensions: ['.scss']
    }))
    .pipe(sass().on('err', sass.logError))
    .pipe(gulp.dest('./css'))
})

// Watch .scss
gulp.task('watch', function () {
  gulp.watch('./**/*.scss', ['sass'])
})

// Set default task
gulp.task('default', ['watch'])
