$(document).ready(function(){

	$("#summary").hide();

	$("input").focus(function(){
		$(this).css({"background-color":"#FF6699"});
	});

	$("input").blur(function(){
		$(this).css({"background-color":"inherit"});
	});

	$("#user-happy").click(function(){
		if($(this).is(":checked"))
		{
			$("#smiley").text("B-)");
		}else{
			$("#smiley").text("3-(");
		}
	});

	$("#user-country").change(function(){
		alert($(this).val());
	});

	$("#form-submit").click(function(e){
		
		e.preventDefault();

		$("#summary").fadeIn();

		$("#name-result").text($("#user-name").val());
		$("#email-result").text($("#user-email").val());

		if($("#user-happy").is(":checked"))
		{
			$("#happy-result").text("are");
		}else{
			$("#happy-result").text("aren't");
		}

		var countryVal = $("#user-country").val();
		var countryName = $("#user-country option[value='" + countryVal + "']").text()
		$("#country-result").text(countryName);
	});

});