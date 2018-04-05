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


Route::get('/restaurant-owner', function () {
    return view('restaurant-owner.homepage');
});

Route::get('/restaurant-owner-login', function () {
    return view('restaurant-owner.login-form');
});

Route::get('/restaurant-owner-register', function () {
    return view('restaurant-owner.register-form');
});
