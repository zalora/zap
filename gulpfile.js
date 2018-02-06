var gulp = require('gulp');
var sass = require('gulp-sass');
var nunjucksRender = require('gulp-nunjucks-render');
var htmlbeautify = require('gulp-html-beautify');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var cleanCSS = require('gulp-clean-css');

var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};

gulp.task('sass', function(){
  return gulp.src('app/scss/main.scss')
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(gulp.dest('app/css'))
});

gulp.task('nunjucks', function() {
  return gulp.src('app/pages/**/*.+(html|nunjucks)')
  .pipe(nunjucksRender({
      path: ['app/templates']
    }))
  .pipe(gulp.dest('app'))
});

gulp.task('htmlbeautify', function() {
  var options = {
    indentSize: 4
  };
  gulp.src('app/*.html')
    .pipe(htmlbeautify(options))
    .pipe(gulp.dest('app'))
});

gulp.task('scripts', function() {
    return gulp.src(['app/js/scripts.js', 'app/js/jquery.parallax.js'])
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('app/dist'));
});

gulp.task('styles', function(){
    return gulp.src('app/css/*.css')
    .pipe(cleanCSS())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('app/dist'))
});

gulp.task('default', ['sass', 'scripts', 'styles', 'nunjucks', 'htmlbeautify']);
