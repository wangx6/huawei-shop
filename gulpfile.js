'use strict';
 
let gulp = require('gulp');
let sass = require('gulp-sass');
let uglify = require('gulp-uglify');
let ftp = require( 'vinyl-ftp' );
let minify = require('gulp-minify');
let replace = require('gulp-string-replace');
let rename = require("gulp-rename");
const filter = require('gulp-filter');
let clean = require('gulp-clean');

/**
 * 
 * @param
 * @return
 */
function replaceWithPrefix(app) {
  let prefix = Math.random().toString(32).replace('.', '');
  let newName = prefix + "-index-bundle.js";
  let newCssName = prefix + '-index.css';
  // replace JS
  gulp.src(['./'+ app +'/js/index-bundle.js'])
    .pipe(rename(newName))
    .pipe(gulp.dest('./'+ app +'/js'));

  let f = filter(['**', '!'+ app +'/js/' + newName]);
  gulp.src(''+ app +'/js/*.js', {read: false})
    .pipe(f)
    .pipe(clean());

  // replace CSS
  gulp.src(['./'+ app +'/css/index.css'])
    .pipe(rename(newCssName))
    .pipe(gulp.dest('./'+ app +'/css'));

  f = filter(['**', '!'+ app +'/css/' + newCssName]);
  gulp.src(''+ app +'/css/*.css', {read: false})
    .pipe(f)
    .pipe(clean());

  gulp.src(['./'+ app +'/index.php']) // Any file globs are supported
    .pipe(replace(new RegExp('\/[^\/]*index-bundle\.js', 'g'), '/' + newName))
    .pipe(replace(new RegExp('\/[^\/]*index\.css', 'g'), '/' + newCssName))
    .pipe(gulp.dest('./'+ app +''))
}

function replaceBackToDev(app) {
  gulp.src(['./'+ app +'/index.php']) // Any file globs are supported
    .pipe(replace(new RegExp('\/[^\/]*index-bundle\.js', 'g'), '/index-bundle.js'))
    .pipe(replace(new RegExp('\/[^\/]*index\.css', 'g'), '/index.css'))
    .pipe(gulp.dest('./'+ app +''))
}

/**
 * 
 * @param
 * @return
 */
gulp.task('replace', function() {
  replaceWithPrefix('user');
});

/**
 * 
 * @param
 * @return
 */
gulp.task('dev-replace', function() {
  replaceBackToDev('user');
});

/////////////////////
gulp.task('user_sass', function () {
  return gulp.src('./src/user/styles/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./user/css'));
});
 
/**
 * 
 * @param
 * @return
 */
gulp.task('user_sass:watch', function () {
  gulp.watch('./src/user/styles/**/*.scss', ['user_sass']);
  gulp.watch('./src/user/js/components/**/*.html', ['user_copy']);
});

/**
 * 
 * @param
 * @return
 */
gulp.task('user_copy', function () {
     return gulp
         .src('./src/user/js/components/**/*.html')
         .pipe(gulp.dest('./user/js/components/'));
});

// Default Task
gulp.task('default', ['user_sass','user_sass:watch', 'user_copy']);

