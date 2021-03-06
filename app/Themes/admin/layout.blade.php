<!DOCTYPE html>
<html>
<head>
	<title>{{ (isset($title)? $title : 'Welcome') }}</title>
	<link href="/assets/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
	<link href="/assets/css/font-awesome.min.css" rel="stylesheet" type="text/css" />
	<link href="/assets/css/ionicons.min.css" rel="stylesheet" type="text/css" />
	<link href="/assets/css/style.css" rel="stylesheet" type="text/css" />
</head>
<body>




    <!-- Fixed navbar -->
<nav class="navbar navbar-inverse navbar-fixed-top">
	<div class="container">
		<div class="navbar-header">
			<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
				<span class="sr-only">Toggle navigation</span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
			</button>
			<a class="navbar-brand" href="#">Sky Blank</a>
		</div>
		<div id="navbar" class="navbar-collapse collapse">
			<ul class="nav navbar-nav">
				<li><a href="/">Home</a></li>
				<li><a href="/god">God</a></li>
			</ul>

			<ul class="nav navbar-nav navbar-right">
				<li class="dropdown">
					<a href="javascript::null()" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
					@if (Auth::guest())
						Dashboard
					@else
						{{ Auth::user()->name }}
					@endif
					<span class="caret"></span>
					</a>
					<ul class="dropdown-menu">

						@if (Auth::guest())
							<li><a href="/register"><i class="fa fa-btn fa-heart"></i>Register</a></li>
							<li><a href="/login"><i class="fa fa-btn fa-sign-in"></i>Login</a></li>
						@else
							<li><a href="/logout"><i class="fa fa-btn fa-sign-out"></i>Logout</a></li>
						@endif

					</ul>
				</li>
			</ul>

		</div><!--/.nav-collapse -->
	</div>
</nav>

@yield('content')



{{-- javascript --}}

    <script src="/assets/js/jquery-2.1.4.min.js"></script>
    <script src="/assets/js/bootstrap.min.js" type="text/javascript"></script>

</body>
</html>