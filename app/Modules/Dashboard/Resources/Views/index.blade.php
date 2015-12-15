@extends('admin.layout')

@section('content')

<div class="container">
	<div class="row">
		<div class="jumbotron">
			<h1>{{ (isset($title)? $title : 'Welcome') }}</h1>
			<p>This is your dashboard <a href="http://philippineglobaloutsourcing.com">Philippines Outsourcing</a></p>
		</div>
	</div>
</div>

@endsection