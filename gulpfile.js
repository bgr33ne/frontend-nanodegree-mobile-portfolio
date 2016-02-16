// Include gulp
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var inlineCss = require('gulp-inline-css');

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src('js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('image', function() {
    return gulp.src('src/images/*')
    .pipe(imagemin({ progressive: true }))
    .pipe(gulp.dest('images'));
});

gulp.task('inline', function() {
    return gulp.src('./*.html')
        .pipe(inlineCss())
        .pipe(gulp.dest('build/'));
});

// Default Task
gulp.task('default', ['scripts']);
