@extends('admin.app')

@section('content')

<div class="container">
	<div class="row">
		<div class="jumbotron">
			<h1>{{ (isset($title)? $title : 'Welcome') }}</h1>
			<p>This is a template showcasing the optional theme stylesheet included in Bootstrap. Use it as a starting point to create something more unique by building on or modifying it.</p>
		</div>
	</div>
</div>

@endsection