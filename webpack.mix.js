// webpack.mix.js

let mix = require('laravel-mix');

mix
    .js('src/app.js', 'assets')
    .sass('src/style.scss', 'assets');
