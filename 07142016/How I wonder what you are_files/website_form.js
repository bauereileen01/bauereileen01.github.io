$(document).ready(function()
{

	$("#answer").hide();

	$("#form-submit").click(function(e){
		e.preventDefault();

		$("#answer").fadeIn();
	});
});