
$(document).ready(function()
{
	$("#twinkle_B").click(function()
	{
		$("#how_B").fadeIn();
		setTimeout(function()
			{
				$("#how_B").text("How I wonder what you are");
			}, 500);	
	});
});