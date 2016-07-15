
$(document).ready(function()
{
	$(".fact").hide();
	$("#how_B").hide();
	$("#form").hide();

	// click text to cause it to blink
	$(".text").click(function()
		{
			$(this).fadeTo(200, 0.3).fadeTo(200, 1.0);
		});

	// hover over text to expand, leave to go back to normal size
	$(".text").mouseenter(function()
	{
		$(this).animate(
			{fontSize: '30px'}, 400);
	}). mouseleave(function()
	{
		$(this).animate(
			{fontSize: '28px'}, 400);
	});

	// click twinkle_A to fade in fact_1
	$("#twinkle_A").click(function()
	{
		$("#fact_1").fadeIn(400)
	});

	// click how_A to fade in fact_2
	$("#how_A").click(function()
	{
		$("#fact_2").fadeIn(400)
	});

	// click up to fade in fact_3
	$("#up").click(function()
	{
		$("#fact_3").fadeIn(400)
	});

	// click like to fade in fact_4
	$("#like").click(function()
	{
		$("#fact_4").fadeIn(400)
	});

	// click twinkle_B to fade in how_B
	$("#twinkle_B").click(function()
	{
		$("#how_B").fadeIn(400)
	});

	// click how_B to fade in form
	$("#how_B").click(function()
	{
		$("#form").fadeIn(400)
	});
});