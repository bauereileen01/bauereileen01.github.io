$(document).ready(function(){
$("#yes_sir").click(function(){
	if($(this).is(":checked"))
	{
		//$("#yes_sir").append();
		$(this).parent().append("<p>Yes sir,<br>Three bags full.</p>");
	}else{
		$("#yes_sir").img("http://t10.deviantart.net/-_Ed1rqLc6QpdalXYM-mHoHK_7k=/300x200/filters:fixed_height(100,100):origin()/pre07/f243/th/pre/i/2015/350/7/6/confused_sheep_by_buttswas-d9ke4mv.png");
	}
});
});