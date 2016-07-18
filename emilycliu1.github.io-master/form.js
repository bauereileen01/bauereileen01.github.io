$(document).ready(function()
{

	// the summary won't be there initially
	$("#summary").hide();


	// click the box and color appears
	$("#user-name").focus(function(){
		$(this).css(
			{"background-color": "#ff50ff"});
	});
	// click the box and color disappears
	$("#user-name").blur(function(){
		$(this).css(
			{"background-color": "inherit"});
	});
	$("#user-email").focus(function(){
		$(this).css(
			{"background-color": "#ff5030"});
	});
	// click the box and color disappears
	$("#user-email").blur(function(){
		$(this).css(
			{"background-color": "inherit"});
	});



	$("#user-happy").click(function(){
		if ($(this).is(":checked")) // colon because it's a pseudo-command
		{
			$("#smiley").text(" :) ");
		}else{
			$("#smiley").text(" :( ");
		}
	});



	$("#user-country").change(function(){
		alert($(this).val());
	});



	$("#form-submit").click(function(e){

		e.preventDefault();  // when this function "e" happens, usually it goes to default, but i don't want that

		$("#summary").fadeIn();

		$("#name-result").text($("#user-name").val());
		$("#email-result").text($("#user-email").val());
		$("#happy-result").text($("#user-happy").val());
		$("#country-result").text($("#user-country").val());

		if ($("#user-happy").is(":checked")) // colon for pseudo-command
		{
			$("#happy-result").text("are"); // if it's checked, replace "on" with "are"
		}else{
			$("#happy-result").text("aren't"); // if it's not checked, replace "off" with "aren't"
		}

		var countryVal = $("#user-country").val(); // this is the shorthand country value
		var countryName = $("#user-country option [value = '" +countryVal+ "']").text() // go to the option where the option = the value
		$("#country-result").text(countryName); // put in the text from that option
	});
});














