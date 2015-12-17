<!DOCTYPE html>
<html>
<head>
	<title>Post {{ (isset($post->title) ? $post->title : 'Something') }}</title>
</head>
<body>
	<h1> {{$post->title}} </h1>
	@can('update-post', $post)
		<a href="javascript():null ">Update this Post</a>
	@endcan
</body>
</html>