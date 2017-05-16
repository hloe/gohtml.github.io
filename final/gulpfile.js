'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minify = require('gulp-minify-css');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var del = require('del');
var runSequence = require('run-sequence');
var rigger = require('gulp-rigger');

gulp.task('sass', function () {
  return gulp.src('src/scss/**/*.scss')
    .pipe(sass())
    // concatenation
    .pipe(concat('styles.css'))
    // minification
    .pipe(minify())
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('autoprefixer', function () {
  return gulp.src('src/css/*.css')
    .pipe(autoprefixer({
      browsers: ['last 5 versions', 'IE 9'],
      cascade: false
    }))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('html', function () {
  gulp.src('src/**/*.html')
    .pipe(rigger())
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.reload({
      stream: true
    }))
});


gulp.task('scripts', function () {
  return gulp.src('src/js/*.js')
    .pipe(gulp.dest('dist/js'))
});

gulp.task('fonts', function () {
  return gulp.src('src/fonts/*')
    .pipe(gulp.dest('dist/fonts'))
});

gulp.task('icons', function () {
  return gulp.src('src/i/*')
    .pipe(gulp.dest('dist/i'))
});

gulp.task('images', function () {
  return gulp.src('src/images/**/*.+(png|jpg|gif|svg)')
    .pipe(cache(imagemin({
      interlaced: true
    })))
    .pipe(gulp.dest('dist/images'))
});

gulp.task('browserSync', function () {
  browserSync({
    server: {
      baseDir: 'src'
    },
  })
});

gulp.task('clean:dist', function (callback) {
  del(['dist/**/*', '!dist/images', '!dist/images/**/*'], callback)
  return cache.clearAll(callback);
});

gulp.task('watch', ['browserSync', 'sass'], function () {
  gulp.watch('src/scss/**/*.scss', ['sass']);
  gulp.watch('src/**/*.html', browserSync.reload);
  //  gulp.watch('src/js/**/*.js', browserSync.reload);
});

gulp.task('default', function (callback) {
  runSequence(['sass', 'browserSync', 'watch', 'html'],
    callback
  )
})

gulp.task('build', function (callback) {
  runSequence('clean:dist', ['sass', 'autoprefixer', 'scripts', 'images', 'fonts', 'icons'],
    callback
  )
});