const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')

    ;

// ホットリロード
mix.browserSync({
    files: [
        "resources/views/**/*.blade.php",
        "public/**/*.*"
    ],
    open: true,
    proxy: {
        target: "http://127.0.0.1:8000"
    },
    https: false,
    reloadOnRestart: true
});
