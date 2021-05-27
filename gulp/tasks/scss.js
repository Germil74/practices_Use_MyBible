module.exports = () => {
    $.gulp.task('scss:dev', () => {
        return $.gulp.src('./src/scss/main.scss')
            .pipe($.gp.debug({title: 'src:'}))
            .pipe($.gp.sourcemaps.init())
            .pipe($.gp.sass())
            .on("error", $.gp.notify.onError((error) => {
               return{
                   title: "Ошибка в стилях",
                   message: error.message
               }
            }))
            .pipe($.gp.autoprefixer({
                browsers: ['last 3 version']
            }))
            .pipe($.gp.groupCssMediaQueries())

            .pipe($.gp.sourcemaps.write())
            .pipe($.gulp.dest('./public/css/'))
            .on('end', $.browserSync.reload);
    });
    $.gulp.task('scss:build', () => {
        return $.gulp.src('./src/scss/main.scss')
            .pipe($.gp.sass())
            .on("error", $.gp.notify.onError({
                title: "Ошибка в стилях"
            }))
            .pipe($.gp.autoprefixer({
                cascade: false
            }))
            .pipe($.gp.groupCssMediaQueries())
            .pipe($.gp.csscomb())
            .pipe($.gp.csso())
            .pipe($.gulp.dest('./public/css/'));

    });
};
