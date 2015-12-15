$(document).ready(function(){

	  // $('#testform').submit(function(e){
	  //   e.preventDefault();
	  // });
	  
	  // $('#subject').selectize({create: true});

	$("#selectall").click(function () {
        var checkAll = $("#selectall").prop('checked');
        if (checkAll) {
            $(".case").prop("checked", true);
        } else {
            $(".case").prop("checked", false);
        }
    });
   
    // if all checkbox are selected, check the selectall checkbox and vice versa
    $(".case").click(function(){
        if($(".case").length == $(".case:checked").length) {
            $("#selectall").prop("checked", true);
        } else {
            $("#selectall").prop("checked", false);
        }
    });

	  var language_data = [ 'eng', 'fil', 'kor', 'rus' ];
	  var languages = language_data.map(function(x) { return { item: x }; });

	  var race_data = [ 'American', 'Chinese', 'India', 'Filipino' ];
	  var races = race_data.map(function(x) { return { item: x }; });

	  var ethnicity_data = [ 'Asian', 'Blank', 'White', 'Native' ];
	  var ethnicities = ethnicity_data.map(function(x) { return { item: x }; });

	  var religion_data = [ 'Christian', 'Muslim', 'Budhist', 'Spaghetti' ];
	  var religions = religion_data.map(function(x) { return { item: x }; });


	$('#language-input').selectize({
	    delimiter: ',',
	    persist: true,
	    options: languages,
	    labelField: "item",
    	valueField: "item",
    	searchField: "item",
	});

	$('#races-input').selectize({
	    delimiter: ',',
	    persist: true,
	    options: races,
	    labelField: "item",
    	valueField: "item",
    	searchField: "item",
	});

	$('#ethnicities-input').selectize({
	    delimiter: ',',
	    persist: true,
	    options: ethnicities,
	    labelField: "item",
    	valueField: "item",
    	searchField: "item",
	});

	$('#religions-input').selectize({
	    delimiter: ',',
	    persist: true,
	    options: religions,
	    labelField: "item",
    	valueField: "item",
    	searchField: "item",
	});




	$("#address-input").geocomplete({
	  details: 'form',
	  detailsAttribute: "data-geo",
	  map: ".map_canvas"
	});

	$("#address-input").geocomplete({
	});



	//Datemask dd/mm/yyyy
      $("#datemask").inputmask("dd/mm/yyyy", {"placeholder": "dd/mm/yyyy"});
      //Datemask2 mm/dd/yyyy
      $("#datemask2").inputmask("mm/dd/yyyy", {"placeholder": "mm/dd/yyyy"});
      //Money Euro
      $("[data-mask]").inputmask();

      //Date range picker
      $('#reservation').daterangepicker();
      //Date range picker with time picker
      $('#reservationtime').daterangepicker({timePicker: true, timePickerIncrement: 30, format: 'MM/DD/YYYY h:mm A'});
      //Date range as a button
      $('#daterange-btn').daterangepicker(
        {
          ranges: {
            'Today': [moment(), moment()],
            'Yesterday': [moment().subtract('days', 1), moment().subtract('days', 1)],
            'Last 7 Days': [moment().subtract('days', 6), moment()],
            'Last 30 Days': [moment().subtract('days', 29), moment()],
            'This Month': [moment().startOf('month'), moment().endOf('month')],
            'Last Month': [moment().subtract('month', 1).startOf('month'), moment().subtract('month', 1).endOf('month')]
          },
          startDate: moment().subtract('days', 29),
          endDate: moment()
        },
        function (start, end) {
          $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
        }
      );

      //iCheck for checkbox and radio inputs
      $('input[type="checkbox"].minimal, input[type="radio"].minimal').iCheck({
        checkboxClass: 'icheckbox_minimal-blue',
        radioClass: 'iradio_minimal-blue'
      });
      //Red color scheme for iCheck
      $('input[type="checkbox"].minimal-red, input[type="radio"].minimal-red').iCheck({
        checkboxClass: 'icheckbox_minimal-red',
        radioClass: 'iradio_minimal-red'
      });
      //Flat red color scheme for iCheck
      $('input[type="checkbox"].flat-red, input[type="radio"].flat-red').iCheck({
        checkboxClass: 'icheckbox_flat-green',
        radioClass: 'iradio_flat-green'
      });

      //Colorpicker
      $(".my-colorpicker1").colorpicker();
      //color picker with addon
      $(".my-colorpicker2").colorpicker();

      //Timepicker
      $(".timepicker").timepicker({
        showInputs: false
      });


      $('#select-gender').selectize({
        create: true,
        sortField: {
          field: 'text',
          direction: 'asc'
        },
        dropdownParent: 'body'
      });



});


// $('#language-input').selectize({    
// 	    delimiter: ',',
// 	    persist: true,
// 	    labelField: "id",
//     	valueField: "title",
//     	searchfield
// 	    options: [
// 	    	{id: 1, title: 'eng'},
// 	    ],
// 	  });