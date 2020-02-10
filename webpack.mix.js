let mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

// webpack.mix.js

mix.webpackConfig({
	resolve: {
		extensions: [".js", ".vue", ".json"],
		alias: {
			"@": __dirname + "/resources/assets/",
			"@fonts": __dirname + "/resources/assets/fonts",
			"@json": __dirname + "/resources/assets/json",
			"@js": __dirname + "/resources/assets/js",
			"@components": __dirname + "/resources/assets/js/components",
			"@sass": __dirname + "/resources/assets/sass",
			"@images": __dirname + "/resources/assets/images",
			"@svg": __dirname + "/resources/assets/svg"
		}
	}
})
	.js("resources/assets/js/app.js", "public/js")
	.sass("resources/assets/sass/app.scss", "public/css");
