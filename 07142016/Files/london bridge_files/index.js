$(document).ready(function(){
	$("p").hover(function(){
	$("p").animate({fontSize: "20px"}, 3000);
},
	function(){
		$("p").stop().animate({fontSize:"15px"});
	});


	$("#user-lady").click(function(){
	    if($(this).is(":checked"))
	    {
	    	$("#smile").remove();
	    	$(this).parent().append("<span id='smile'>:)</span>");
        }else{
        	$("#smile").text(":(");
        }
    });

});
	


