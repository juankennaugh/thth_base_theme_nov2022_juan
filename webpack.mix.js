let mix = require( "laravel-mix" );
const path = require( 'path' );
require( 'laravel-mix-purgecss' );


/*
 |--------------------------------------------------------------------------
 | Configuration
 |--------------------------------------------------------------------------
 */

mix.setPublicPath( 'public_html/application/themes/thirty_three/assets/dist' )


mix.options( {
  // grid: "autoplace",
  processCssUrls: false, // Process/optimize relative stylesheet url()'s. Set to false, if you don't want them touched.
  purifyCss: false, // Remove unused CSS selectors.
  terser: {}, // Terser-specific options. https://github.com/webpack-contrib/terser-webpack-plugin#options
  postCss: [
  ], // Post-CSS options: https://github.com/postcss/postcss/blob/master/docs/plugins.md
} );


// console.log( __dirname );
// console.log( path.join( __dirname, '/public_html/index.html' ) );

/*
 |--------------------------------------------------------------------------
 | SASS
 |--------------------------------------------------------------------------
 */


// APP
mix.sass(
  "public_html/application/themes/thirty_three/assets/src/sass/app.scss",
  "public_html/application/themes/thirty_three/assets/dist/css/app.css", {
    sassOptions: {
      includePaths: [
        './node_modules/uniformcss'
      ]
    }
  } )
.purgeCss( {
  // enabled: true,
  content: [ 
    './public_html/index.html',
    './public_html/application/blocks/**/*.html',
    ],
  folders: [ 'blocks', 'single_pages', ],
  extensions: [ 'html', 'js', 'php' ],
  safelist: { deep: [ /hljs/ ] },
} )
.version();

// JOB SEARCH
mix.sass(
  "public_html/application/themes/thirty_three/assets/src/sass/job-search.scss",
  "public_html/application/themes/thirty_three/assets/dist/css/job-search.css", {
    sassOptions: {
      includePaths: [
        './node_modules/uniformcss'
      ]
    }
  } )
.purgeCss( {
  // enabled: true,
  content: [ 
    './public_html/index.html',
    './public_html/application/blocks/**/*.html',
    ],
  folders: [ 'blocks', 'single_pages', ],
  extensions: [ 'html', 'js', 'php' ],
  safelist: { deep: [ /hljs/ ] },
} )
.version();


/*
 |--------------------------------------------------------------------------
 | Javascript
 |--------------------------------------------------------------------------
 */

// 1. Extract all node_modules vendor libraries into a vendor.js file.
mix.js(
    [
      "public_html/application/themes/thirty_three/assets/src/js/app.js",
    ],
    "public_html/application/themes/thirty_three/assets/dist/js/app.js"
  )
  .extract()
  .version();


mix.js(
  [
    "public_html/application/themes/thirty_three/assets/src/js/job-search.js",
  ],
  "public_html/application/themes/thirty_three/assets/dist/js/job-search.js"
)
.extract()
.version();

/*
 |--------------------------------------------------------------------------
 | Images & Fonts
 |--------------------------------------------------------------------------
 */

// mix.copyDirectory(
//   "application/themes/thirty_three/assets/src/img",
//   "application/themes/thirty_three/assets/dist/img"
// );
// mix.copyDirectory("application/themes/thirty_three/assets/src/video", "application/themes/thirty_three/assets/dist/video");
// mix.copyDirectory(
//   "application/themes/thirty_three/assets/src/fonts",
//   "application/themes/thirty_three/assets/dist/fonts"
// );

/*
 |--------------------------------------------------------------------------
 | Webpack Config
 |--------------------------------------------------------------------------
 */

 mix.webpackConfig( {
  devtool: 'inline-source-map'
 });



// Full API
// mix.js(src, output);
// mix.react(src, output); <-- Identical to mix.js(), but registers React Babel compilation.
// mix.preact(src, output); <-- Identical to mix.js(), but registers Preact compilation.
// mix.coffee(src, output); <-- Identical to mix.js(), but registers CoffeeScript compilation.
// mix.ts(src, output); <-- TypeScript support. Requires tsconfig.json to exist in the same folder as webpack.mix.js
// mix.extract(vendorLibs);
// mix.sass(src, output);
// mix.less(src, output);
// mix.stylus(src, output);
// mix.postCss(src, output, [require('postcss-some-plugin')()]);
// mix.browserSync('my-site.test');
// mix.combine(files, destination);
// mix.babel(files, destination); <-- Identical to mix.combine(), but also includes Babel compilation.
// mix.copy(from, to);
// mix.copyDirectory(fromDir, toDir);
// mix.minify(file);
// mix.sourceMaps(); // Enable sourcemaps
// mix.version(); // Enable versioning.
// mix.disableNotifications();
// mix.setPublicPath('path/to/public');
// mix.setResourceRoot('prefix/for/resource/locators');
// mix.autoload({}); <-- Will be passed to Webpack's ProvidePlugin.
// mix.webpackConfig({}); <-- Override webpack.config.js, without editing the file directly.
// mix.babelConfig({}); <-- Merge extra Babel configuration (plugins, etc.) with Mix's default.
// mix.then(function () {}) <-- Will be triggered each time Webpack finishes building.
// mix.override(function (webpackConfig) {}) <-- Will be triggered once the webpack config object has been fully generated by Mix.
// mix.dump(); <-- Dump the generated webpack config object to the console.
// mix.extend(name, handler) <-- Extend Mix's API with your own components.
// mix.options({
//   extractVueStyles: false, // Extract .vue component styling to file, rather than inline.
//   globalVueStyles: file, // Variables file to be imported in every component.
//   processCssUrls: true, // Process/optimize relative stylesheet url()'s. Set to false, if you don't want them touched.
//   purifyCss: false, // Remove unused CSS selectors.
//   terser: {}, // Terser-specific options. https://github.com/webpack-contrib/terser-webpack-plugin#options
//   postCss: [] // Post-CSS options: https://github.com/postcss/postcss/blob/master/docs/plugins.md
// });

