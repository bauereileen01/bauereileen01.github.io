$(document).ready(function() {



	$("#learn").hover(function(){
	$("#learn").animate({color: "black"}, 1000);
},
	function(){
		$("#learn").stop().animate({color:"white"});
});





$("#verse3").hover(function() {
    $(this).animate({"color":"black"}, "slow");
}, function() {
    $(this).animate({"color":"white"}, "slow");
});




$("#user-recipes").change(function(){
		alert($(this).val());
	});





});


function play(myVowels){
       var audio = document.getElementById(myVowels);
       audio.play();

}
