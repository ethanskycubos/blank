@extends('admin.layout')

@section('content')

<div class="container">
	<div class="row">
		<div class="jumbotron">
			<h1>{{ (isset($title)? $title : 'Welcome') }}</h1>
			<p>Welcome to God</p>
		</div>
	</div>
</div>

@endsection