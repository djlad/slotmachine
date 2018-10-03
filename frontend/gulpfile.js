var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var uglify = require('gulp-uglify');
var browserify = require('gulp-browserify');

var destinationDir = './dist';

// Gulp task to minify HTML files
gulp.task('pages', function() {
  console.log('pages2 ');
    return gulp.src(['./src/*.html'])
      .pipe(htmlmin({
        collapseWhitespace: true,
        removeComments: true
      }))
      .pipe(gulp.dest(destinationDir));
});

gulp.task('scriptsDependencies', function() {
  return gulp.src('./src/libdist/*')
    .pipe(gulp.dest(destinationDir+'/libdist'))
});

gulp.task("scripts", function () {
  return gulp.src('./src/js/*.js')
  .pipe(gulp.dest("./dist/js"));
});

gulp.task("styles", function () {
  return gulp.src('./src/styles/*')
  .pipe(gulp.dest(destinationDir + '/styles'));
});

gulp.task('images', function(){
  return gulp.src('src/img/*')
  .pipe(gulp.dest(destinationDir + '/img'))
});

gulp.task('watch', function(){
    gulp.watch('src/*.html', ['pages']);
    gulp.watch('src/js/*.js', ['scripts']);
    gulp.watch('src/libdist', ['scriptsDependencies']);
    gulp.watch('src/img/*', ['images']);
    gulp.watch('src/styles/*', ['styles']);
});