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
	'resources/assets/js/admins/jquery.min.js',
	'resources/assets/js/admins/bootstrap.min.js',
	'resources/assets/js/restaurant-owners/jquery.magnific-popup.js',
	'resources/assets/js/restaurant-owners/owl.carousel.min.js',
	], 'public/js/restaurant-owner-homepage.js')
	.styles([
		'resources/assets/css/admins/bootstrap.min.css',
		'resources/assets/css/admins/font-awesome.min.css',
		'resources/assets/css/restaurant-owners/owl.carousel.css',
		'resources/assets/css/restaurant-owners/owl.theme.default.css',
		'resources/assets/css/restaurant-owners/magnific-popup.css',
		'resources/assets/css/restaurant-owners/style-homepage.css'
		], 'public/css/restaurant-owner-homepage.css');
mix.scripts([
	'resources/assets/js/admins/jquery.min.js',
	'resources/assets/js/admins/bootstrap.min.js',
	'resources/assets/js/admins/icheck.min.js'
	], 'public/js/admin-login.js')
	.styles([
		'resources/assets/css/admins/bootstrap.min.css',
		'resources/assets/css/admins/font-awesome.min.css',
		'resources/assets/css/admins/ionicons.min.css',
		'resources/assets/css/admins/AdminLTE.min.css',
		'resources/assets/css/admins/blue.css'
		], 'public/css/admin-login.css');
mix.scripts([
	'resources/assets/js/admins/jquery.min.js',
	'resources/assets/js/admins/bootstrap.min.js',
	'resources/assets/js/admins/icheck.min.js',
	'resources/assets/js/admins/jquery.slimscroll.min.js',
	'resources/assets/js/admins/fastclick.js',
	'resources/assets/js/admins/adminlte.min.js',
	'resources/assets/js/admins/demo.js'
	], 'public/js/admin-dashboard.js')
	.styles([
		'resources/assets/css/admins/bootstrap.min.css',
		'resources/assets/css/admins/font-awesome.min.css',
		'resources/assets/css/admins/ionicons.min.css',
		'resources/assets/css/admins/AdminLTE.min.css',
		'resources/assets/css/admins/blue.css',
		'resources/assets/css/admins/_all-skins.min.css'
		], 'public/css/admin-dashboard.css');
mix.scripts([
	'resources/assets/js/restaurant-owners/jquery.js',
	'resources/assets/js/restaurant-owners/bootstrap.min.js',
	'resources/assets/js/restaurant-owners/jquery.backstretch.min.js'
	], 'public/js/restaurant-owners-login.js')
	.styles([
		'resources/assets/css/restaurant-owners/bootstrap.css',
		'resources/assets/css/admins/font-awesome.min.css',
		'resources/assets/css/restaurant-owners/style-dashboard.css',
		'resources/assets/css/restaurant-owners/style-dashboard-responsive.css'
		], 'public/css/restaurant-owners-login.css');

