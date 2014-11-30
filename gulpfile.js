var gulp = require('gulp'),
    concatCss = require('gulp-concat-css'),
    minifyCSS = require('gulp-minify-css'),
    watch = require('gulp-watch');


gulp.task('default', function() {

    gulp.src([
            'bower_components/bootstrap/dist/css/bootstrap.min.css',
            'bower_components/font-awesome/css/font-awesome.css',
            'public/stylesheets/*.css'
        ])
        .pipe(concatCss("styles.min.css"))
        .pipe(minifyCSS({keepBreaks:true}))
        .pipe(gulp.dest('public/'));
    
});

gulp.task('watch', function() {
  	gulp.watch([
  			'public/stylesheets/*.css',
  		], ['default']);
});