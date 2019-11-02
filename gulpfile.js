var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('./assets/style/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./assets/style/'))
});

gulp.task('sass:watch', function () {
    gulp.watch('./assets/style/*.scss', gulp.series('sass'));
});