var gulp = require('gulp'), // Gulp
  connect = require('gulp-connect-php'), // php server
  browserSync = require('browser-sync'), // BrowserSync
  reload = browserSync.reload, // Reload
  watch = require('gulp-watch'), // Watcher
  path = require('path'); // Path

// Run Server
gulp.task('serve', function () {
  connect.server({
    port: 4038
  }, function () {
    browserSync.init({
      proxy: '127.0.0.1:4038'
    });
  });
  // gulp.watch('./scss/**/*.scss', ['scss']);
  gulp.watch("./**/*.php").on('change', reload);
});