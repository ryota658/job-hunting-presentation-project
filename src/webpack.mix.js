const mix = require('laravel-mix');
const glob = require('glob');

mix.ts('resources/ts/routes/*', 'public/js/routes/');
mix.ts('resources/ts/index.tsx', 'public/js/');
glob.sync('resources/ts/pages/*.tsx').map(function (file) {
    mix.ts(file, 'public/js/pages/').react().version;
});
mix.sass('resources/sass/app.scss', 'public/css');

glob.sync('resources/ts/compornents/index/*.tsx').map(function (file) {
    mix.ts(file, 'public/js/compornents/index').react().version;
});
glob.sync('resources/ts/compornents/signUp/*.tsx').map(function (file) {
    mix.ts(file, 'public/js/compornents/signUp').react().version;
});
glob.sync('resources/ts/fook/*.ts').map(function (file) {
    mix.ts(file, 'public/js/fook').react.version;
});

if (mix.inProduction()) {
    mix.version();
}

// // ESLintに関する設定（この部分を丸ごと追記するイメージです）
// if (!mix.inProduction()) {
//     // 本番環境ではESLintは使用しない
//     mix.webpackConfig({
//         module: {
//             rules: [
//                 {
//                     enforce: 'pre',
//                     exclude: /node_modules/,
//                     loader: 'eslint-loader',
//                     test: /\.(js|react)?$/,
//                 },
//             ],
//         },
//     });
// }
