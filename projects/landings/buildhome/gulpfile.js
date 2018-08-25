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
var svgSprite = require("gulp-svg-sprites");

gulp.task('sprites', function () {
  return gulp.src('app/i/*.svg')
    .pipe(svgSprite())
    .pipe(gulp.dest('app/i'));
});

gulp.task('sass', function () {
  return gulp.src('app/scss/**/*.scss')
    .pipe(sass())
    .pipe(concat('styles.min.css'))
    .pipe(minify())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('autoprefixer', function () {
  return gulp.src('app/css/*.css')
    .pipe(autoprefixer({
      browsers: ['last 16 versions', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'],
      cascade: false
    }))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('html', function () {
  gulp.src('app/*.html')
    .pipe(rigger())
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.reload({
      stream: true
    }))
});


gulp.task('scripts', function () {
  return gulp.src('app/js/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
});

gulp.task('fonts', function () {
  return gulp.src('app/fonts/*')
    .pipe(gulp.dest('dist/fonts'))
});

gulp.task('icons', function () {
  return gulp.src('app/i/**/*.svg')
    .pipe(gulp.dest('dist/i'))
});

gulp.task('images', function () {
  return gulp.src('app/images/**/*.+(png|jpg|gif|svg)')
    .pipe(cache(imagemin({
      interlaced: true
    })))
    .pipe(gulp.dest('dist/images'))
});

gulp.task('browserSync', function () {
  browserSync({
    server: {
      baseDir: 'app'
    },
  })
});

gulp.task('clean:dist', function (callback) {
  del(['dist/**/*', '!dist/images', '!dist/images/**/*'], callback)
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
  runSequence('clean:dist', ['sass', 'autoprefixer', 'scripts', 'images', 'icons', 'fonts', 'html'],
    callback
  )
});