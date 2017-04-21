// Install modules with "npm install --save-dev module-name"
var gulp         = require('gulp');
var sass         = require('gulp-sass');
var rename       = require('gulp-rename');
var minify_css   = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');

var directory = {
  scss : 'assets/styles/scss/*.scss',
  css  : 'assets/styles/css'
}

// Task for converting and minifying .scss files to .css files
gulp.task('build-css', function() {
  gulp.src(directory.scss)
    // Create non-minified .css files
    .pipe(sass().on('error', sass.logError))
    // Automatically add vendor prefixes like webkit, moz and ms
    .pipe(autoprefixer())
    .pipe(gulp.dest(directory.css))

    // Create minified .min.css files
    .pipe(minify_css({keepBreaks: false}))
    .pipe(rename({extname: '.min.css'}))
    .pipe(gulp.dest(directory.css));
});

// Task that watches for changes to SCSS and CSS files
gulp.task('watch', function() {
  // When changes are made to scss files run the styles task
  gulp.watch(directory.scss, ['build-css']);
});

// Default task that runs when you just enter 'gulp' in the terminal
gulp.task('default', ['build-css','watch']);
