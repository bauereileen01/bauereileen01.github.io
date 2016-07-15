$(document).ready(function() {

 $("#rain").fadeOut();

 setTimeout(function(){
    $("#rain").text("so much...");
 }, 5000);
 
 $("#rain").fadeIn();

 $("#bed").fadeOut();

 setTimeout(function(){
    $("#bed").text("NOW THE MOTHERFUCKERS DEAD");
 }, 10000);
 
 $("#bed").fadeIn();

  $(document).ready(function(){
    $("#text").hover(function(){
    $("#text").animate({fontSize: "20px"});
},
    function(){
        $("#text").stop().animate({fontSize:"12px"});
    });
});



 $("#dead").mouseenter(function(){
    $(this).css("border", "solid 15px red");
 });

 $("#dead").mouseleave(function(){
    $(this).css("border", "none");
 });

});

