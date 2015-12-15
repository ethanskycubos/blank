<?php

Route::group(['prefix' => 'dashboard'], function() {
	// Route::get('/', function() {
	// 	dd('This is the Dashboard module index page.');
	// });

	Route::resource('/', 'DashboardController');
});