var gulp = require ('gulp'),
    watch = require ('gulp-watch'),
    browserSync = require ('browser-sync').create();



gulp.task('cssInject', ['styles'], function() {
  return gulp.src('./temp/styles/styles.css')
    .pipe(browserSync.stream());
});


gulp.task('watch', function() {
  browserSync.init({
    notify: false,
    server: {
      baseDir: "./"
    }
  });

  watch('./*.html', function() {
    browserSync.reload();
  });

  watch('./assets/styles/**/*.scss', function() {
    gulp.start('cssInject');
  });
});