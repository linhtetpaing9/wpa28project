let mix = require('laravel-mix');

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

mix.scripts([
	'resources/assets/js/restaurant-owner/jquery.min.js',
	'resources/assets/js/restaurant-owner/bootstrap.min.js',
	'resources/assets/js/restaurant-owner/jquery.magnific-popup.js',
	'resources/assets/js/restaurant-owner/owl.carousel.min.js',
	], 'public/js/restaurant-owner-homepage.js')
	.styles([
		'resources/assets/css/restaurant-owner/bootstrap.min.css',
		'resources/assets/css/restaurant-owner/font-awesome.min.css',
		'resources/assets/css/restaurant-owner/owl.carousel.css',
		'resources/assets/css/restaurant-owner/owl.theme.default.css',
		'resources/assets/css/restaurant-owner/magnific-popup.css',
		'resources/assets/css/restaurant-owner/style.css'
		], 'public/css/restaurant-owner-homepage.css');
