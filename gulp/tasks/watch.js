module.exports = function () {
    $.gulp.task('watch', function () {
        $.gulp.watch('./src/views/**/*.{hbs,js}', $.gulp.series('hbs'));
        $.gulp.watch('./src/scss/**/*.scss', $.gulp.series('scss:dev'));
        $.gulp.watch('./src/img/svg/*.svg', $.gulp.series('svg'));
        $.gulp.watch('./src/js/**/*.js', $.gulp.series('build-js'));
        $.gulp.watch(['./src/img/general/**/*.{png,jpg,gif}',
            './src/img/content/**/*.{png,jpg,gif}'], $.gulp.series('img:dev'));
    });

};
