@extends('admin.layout')

@section('content')

<div class="container">
	<div class="row">
		<div class="jumbotron">
			<h1>{{ (isset($title)? $title : 'Welcome') }}</h1>
			<p>Welcome to <a href="http://philippineglobaloutsourcing.com/">Philippines Outsourcing</a> basic project template for modular development.</p>
		</div>
	</div>
</div>

@endsection