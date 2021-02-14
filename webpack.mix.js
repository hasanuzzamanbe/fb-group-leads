// webpack.mix.js

let mix = require('laravel-mix');

mix
    .js('src/options.js', 'assets')
    .js('src/scrapper.js', 'assets')
    .js('src/backgroundApp.js', 'assets')
    .sass('src/style.scss', 'assets');
