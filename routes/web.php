<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');


Route::get('/admins', function () {
    return view('admins.dashboard');
});

Route::get('/admins-login', function () {
    return view('admins.login-form');
});

Route::get('/admins-register', function () {
    return view('admins.register-form');
});


Route::get('/restaurant-owners', function () {
    return view('restaurant-owners.homepage');
});

Route::get('/restaurant-owners-login', function () {
    return view('restaurant-owners.login-form');
});

Route::get('/restaurant-owners-register', function () {
    return view('restaurant-owners.register-form');
});
