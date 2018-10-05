var gulp = require ('gulp'),
    watch = require ('gulp-watch'),
    sass = require ('gulp-sass'),
    postcss = require ('gulp-postcss'),
    autoprefixer = require ('autoprefixer'),
    nested = require ('postcss-nested'),
    cssvars = require ('postcss-simple-vars');


gulp.task('default', function() {
  console.log("Hooray! You created a Gulp Task.");
});


gulp.task('html', function() {
  console.log("Imagine something useful being done to your HTML here.");
});


gulp.task('styles', function() {
  var processors = [
    cssvars, nested, autoprefixer
  ];

  return gulp.src('./assets/styles/styles.scss')
    .pipe(sass())
    .pipe(postcss(processors))
    .pipe(gulp.dest('./temp/styles'));
});


gulp.task('watch', function() {

  watch('./index.html', function() {
    gulp.start('html');
  });

  watch('./assets/styles/**/*.scss', function() {
    gulp.start('styles');
  });
  
});