<?php namespace App\Modules\God\Http\Controllers;

// use App\Models\God;
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

class GodController extends Controller {

	public function __construct(Request $request) 
	{
	}

	public function index()
	{
		$title = 'Companies';
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