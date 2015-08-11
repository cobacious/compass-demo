var gulp = require('gulp');
var browserSync = require('browser-sync');
var compass = require('gulp-compass');

gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: "./"
    }
  });
});

gulp.task('compass', function() {
  return gulp.src('sass/*.scss')
    .pipe(compass({
      config_file: './config.rb',
      css: 'stylesheets',
      sass: 'sass'
    }))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('default', ['browser-sync', 'compass'], function() {
  gulp.watch('sass/*.scss', ['compass']);
  gulp.watch('*.html').on('change', browserSync.reload);
});
