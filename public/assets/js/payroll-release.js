$(document).ready(function(){

	computePayroll();

	function computePayroll () {
		var url = $('#payroll_release_form').attr('action');
		var formData = $('#payroll_release_form').serialize();

		$.post(url, formData)
			.done(function(result){
				alert(result);
			})
			.fail(function(){
				alert('fail');
			});
	}

});