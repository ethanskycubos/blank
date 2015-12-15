$(document).ready(function(){

	var btn_amIn = $('#btn_am_in');
	var btn_amOut = $('#btn_am_out');
	var btn_pmIn = $('#btn_pm_in');
	var btn_pmOut = $('#btn_pm_out');
	var btn_otIn = $('#btn_ot_in');
	var btn_otOut = $('#btn_ot_out');
	
	var diff = parseInt(btn_amIn.attr('data-diff-val'));
	var stat = btn_amIn.attr('data-diff-stat');

	var lati = $('#Latitude');
	var longi = $('#Longitude');
	var btn_submit = $('#btn-submit');

	var clock = $('.your-clock').FlipClock({
		// ... your options here
		autoStart: false,
	});

	btn_submit.text('Please Wait');
	btn_submit.prop('disabled', true);
	getLocation();

	if (diff !== 0) {
		clock.setTime(diff);
		if (stat === 'true') {
			clock.start();
		};
	};

	btn_amIn.click(function(){
		var url = btn_amIn.attr('data-url');

		clock.start();

		timeIn(url, $(this));
	});

	btn_amOut.click(function(){
		var url = btn_amOut.attr('data-url');
		var id = btn_amIn.attr('data-time-id');

		clock.stop();

		timeInOut(url, id, $(this));
	});

	btn_pmIn.click(function(){
		var url = btn_pmIn.attr('data-url');
		var id = btn_amIn.attr('data-time-id');

		clock.start();

		timeInOut(url, id, $(this));
	});

	btn_pmOut.click(function(){
		var url = btn_pmOut.attr('data-url');
		var id = btn_amIn.attr('data-time-id');

		clock.stop();

		timeInOut(url, id, $(this));
	});

	btn_otIn.click(function(){
		var url = btn_otIn.attr('data-url');
		var id = btn_amIn.attr('data-time-id');

		clock.start();

		timeInOut(url, id, $(this));
	});

	btn_otOut.click(function(){
		var url = btn_otOut.attr('data-url');
		var id = btn_amIn.attr('data-time-id');

		clock.stop();

		timeInOut(url, id, $(this));
	});

	function timeIn (url, btn) {
		$.get(url)
			.done(function(data){
				results = jQuery.parseJSON(data);
				btn.text(results[0]);
				$('#btn_am_in').attr("data-time-id", results[1]);
				btn.removeClass('btn-info').addClass('btn-success');
				btn.prop("disabled", true);
			})
			.fail(function( data ){
				alert( 'Oops! Something went wrong.' );
			});
	}

	function timeInOut (url, id, btn) {
		$.get(url, {id: id})
			.done(function(data){
				btn.text(data);
				btn.removeClass('btn-info').addClass('btn-success');
				btn.prop("disabled", true);
			})
			.fail(function( data ){
				alert( data );
			});
	}

//////////////////////////////////////////////
//GEOLOCATION
//////////////////////////////////////////////
	function getLocation() {
	    if (navigator.geolocation) {
	        navigator.geolocation.getCurrentPosition(showPosition);
	    } else {
	        lati.val("Geolocation is not supported by this browser.");
	        longi.val("Geolocation is not supported by this browser.");
	    }
	}
	function showPosition(position) {
		lati.val(position.coords.latitude);
		longi.val(position.coords.longitude);

	        btn_submit.prop('disabled', false);
			btn_submit.text('Submit');
	    // x.innerHTML = "Latitude: " + position.coords.latitude +
	    // "<br>Longitude: " + position.coords.longitude;
	}


/////////////////////////////////////////////
//SUBMIT
/////////////////////////////////////////////

	btn_submit.click(function(){
		var notes = $('#Notes').val();
		var loc = $('#loc').val();
		var lat = $('#Latitude').val();
		var lng = $('#Longitude').val();
		var url = btn_submit.attr('data-url');
		var id = btn_amIn.attr('data-time-id');

		$.get(url, {
			id: id,
			notes: notes,
			loc: loc,
			lat: lat,
			lng: lng
		})
			.done(function(data){
				alert(data);
			})
			.fail(function(data){
				alert('failed to submit details');
			});
	});

});