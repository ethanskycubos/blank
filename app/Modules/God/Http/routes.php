<?php

Route::group(['prefix' => 'god'], function() {
	// Route::get('/', function() {
	// 	dd('This is the God module index page.');
	// });

	Route::resource('/', 'GodController');
});