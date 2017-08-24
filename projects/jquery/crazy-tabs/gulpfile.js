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
var babel = require('gulp-babel');

gulp.task('sass', function () {
  return gulp.src('app/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('autoprefixer', function () {
  return gulp.src('app/css/*.css')
    .pipe(autoprefixer({
      browsers: ['last 5 versions', 'IE 9'],
      cascade: false
    }))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('html', function () {
  gulp.src('app/**/*.html')
    //    .pipe(rigger())
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.reload({
      stream: true
    }))
});


gulp.task('scripts', function () {
  return gulp.src('app/js/**/*.js')
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.reload({
      stream: true
    }));
});


gulp.task('img', function () {
  return gulp.src('app/img/**/*.+(png|jpg|gif|svg)')
    .pipe(cache(imagemin({
      interlaced: true
    })))
    .pipe(gulp.dest('dist/img'))
});

gulp.task('browserSync', function () {
  browserSync({
    server: {
      baseDir: 'app'
    },
  })
});

gulp.task('clean:dist', function (callback) {
  del(['dist/**/*', '!dist/img', '!dist/img/**/*'], callback)
  return cache.clearAll(callback);
});

gulp.task('watch', ['browserSync', 'sass'], function () {
  gulp.watch('app/scss/**/*.scss', ['sass']);
  gulp.watch('app/**/*.html', browserSync.reload);
  gulp.watch('app/js/**/*.js', browserSync.reload);
});

gulp.task('default', function (callback) {
  runSequence(['sass', 'autoprefixer', 'browserSync', 'watch', 'html'],
    callback
  )
})

gulp.task('build', function (callback) {
  runSequence('clean:dist', ['sass', 'autoprefixer', 'scripts', 'img'],
    callback
  )
});