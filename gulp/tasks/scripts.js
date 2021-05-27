// development  production
module.exports = function() {
    $.gulp.task("build-js", () => {
        return $.gulp.src("./src/js/main.js")
            .pipe($.webpack({
                mode: 'development',
                output: {
                    filename: 'main.js'
                },
                watch: false,
                devtool: "source-map",
                module: {
                    rules: [
                        {
                            test: /\.m?js$/,
                            exclude: /(node_modules|bower_components)/,
                            use: {
                                loader: 'babel-loader',
                                options: {
                                    presets: [['@babel/preset-env', {
                                        debug: true,
                                        corejs: 3,
                                        useBuiltIns: "usage"
                                    }]]
                                }
                            }
                        }
                    ]
                }
            }))
            .pipe($.gulp.dest('./public/js/'))
            .on('end', $.browserSync.reload);
    });

};
