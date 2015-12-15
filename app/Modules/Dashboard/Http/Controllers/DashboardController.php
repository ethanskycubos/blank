<?php namespace App\Modules\Dashboard\Http\Controllers;

// use App\Models\Dashboard;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

/**
 * Module: companies : companies
 * @author Christopher John Cubos
 */


/**
 * index view (ajax)
 * api (ajax)
 * create (ajax) + edit for pivots
 * show view with pivots
 * edit view (ajax)
 */

class DashboardController extends Controller {

	public function __construct(Request $request) 
	{
	}

	public function index()
	{
		$title = 'Dashboard';
		return view('god::index', compact('title'));
	}

	public function show($id)
	{
	}

	public function create()
	{
	}

	public function edit($id) 
	{
	}

	public function store()
	{
	}



}