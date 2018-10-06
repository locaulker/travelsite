var gulp = require ('gulp'),
  sass = require ('gulp-sass'),
  postcss = require ('gulp-postcss'),
  autoprefixer = require ('autoprefixer'),
  nested = require ('postcss-nested'),
  cssvars = require ('postcss-simple-vars'),
  cssImport = require ('postcss-Import');



gulp.task('styles', function() {
  var processors = [
    cssImport, cssvars, nested, autoprefixer
  ];

  return gulp.src('./assets/styles/styles.scss')
    .pipe(sass({outputStyle: 'expanded'}))
    .on('error', function(errorInfo) {
      console.log(errorInfo.toString());
      this.emit('end');
    })
    .pipe(postcss(processors))
    .pipe(gulp.dest('./temp/styles'));
});