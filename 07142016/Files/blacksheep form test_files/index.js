$(document).ready(function(){
	$("#baabaa").hover(function(){
	$("#baabaa").animate({fontSize: "48px"});
},
	function(){
		$("#baabaa").stop().animate({fontSize:"42px"});
	});
});