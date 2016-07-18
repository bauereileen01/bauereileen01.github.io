$(document).ready(function(){
	$("#button").click(function(e){
		e.preventDefault();
		$(".name-result").text($("#user-name").val());
	});

	$("#button").click(function(e){
		e.preventDefault();
		$(".lamb").text($("#friend-name").val());

	});

	$("#two").hover(function(){
	$("#ptwo").fadeIn(4000);
	});

	$("#lambtwo").click(function(){
	$("#ptwo").fadeIn(3000);
	});


	$("#lil").hover(function(){
		$("#lil").animate({fontSize: "12px"}, 2000);
	},
	function(){
		$("#lil").stop().animate({fontSize:"20px"});
	});

		$("#followed").click(function(){
		$("#hooves").fadeIn();
		});

	$("#appear").click(function(){
		$("#school").fadeIn();
		});

		$("#last").click(function(){
		$("#end").fadeIn();
		});
	});	
