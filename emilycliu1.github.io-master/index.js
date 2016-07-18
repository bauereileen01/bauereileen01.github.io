$(document).ready(function()
{
	// Hide all the extra stuff
	$(".fact").hide();
	$("#how_B").hide();
	$("#form").hide();
	$("#answer").hide();

	// hover over text to expand, leave to go back to normal size
	$(".text").mouseenter(function()
		{
			$(this).animate(
				{fontSize: '32px'}, 300);
		}). mouseleave(function()
		{
			$(this).animate(
				{fontSize: '30px'}, 300);
		});

	// click sign pulses twice
	$("#container_1").mouseenter(function()
		{
			$("#click").
				animate({fontSize: "20px"}, 400).animate({fontSize: "18px"}, 400).animate({fontSize: "20px"}, 400).animate({fontSize: "18px"}, 400);
		});

	// click text to cause it to blink
	$(".text").click(function()
		{
			$(this).fadeTo(200, 0.3).fadeTo(200, 1.0);
		});

	// click twinkle_A to get rid of click sign and fade in fact_1
	$("#twinkle_A").click(function()
	{
		$("#click").fadeOut(200)
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
	
	// Possible answers for the form
	// Shoutout to Charlie Liu for showing me what I was getting wrong with this I love you dad

	$("#submit").click(function(e) {
		e.preventDefault(); // prevents page from refreshing, which is what usually happens with a button

		var guessVal = $("#guess").val(); // guessVal is an easy way to say the option value of the guess
		var answerAppear = ""; // right now this is empty, but this is the text that will fill in
		// these two variables above need to go in here, because reading the guess value has to happen after the click, otherwise the default guess (identical) will be put in and won't be forgotten

		if (guessVal == "identical") // if the option value is "identical"
		{
			answerAppear = "Incorrect! The two elements are Hydrogen and Helium."; // then the text in the answer div will be ""
		} else if (guessVal == "proxima") // if it's not identical but is proxima...
		{
			answerAppear = "Incorrect! The star is Proxima Centauri.";
		} else // no need to write "if (guessVal) == "flicker" because it's the only option left anyways
		{
			answerAppear = 'Correct! "Twinkling" is actually caused by light bending in the atmosphere.'; // diff quotes bc of the quotes in the text
		}

		$("#answer").text(answerAppear).fadeIn(50).animate({fontSize: "60px"}, 200).animate({fontSize: "37px"}, 400); // this is the function, put it after the if/else because there has to be in input for answerAppear before the animations happen	
	});



	// 	ALL THIS STUFF IS FOR THE SCROLLING BUTTONS

	if ($(".returns").length)
	{
		$("#back_to_one").click(function (e){
			e.preventDefault(); // prevents refreshing, as you will. literally who ever wants it to refresh??
			$("html,body").animate(  // the body of the document animates
				{
				scrollTop: 0 // takes you to 0px on the document, aka the top of the first picture
				}, 600); // takes 600 milliseconds to do this
		});

		$("#back_to_two").click(function (e){
			e.preventDefault();
			$("html,body").animate({scrollTop: 860}, 600);
		});


		$("#back_to_three").click(function (e){
			e.preventDefault();
			$("html,body").animate({scrollTop: 1880}, 600);
		});


		$("#back_to_four").click(function (e){
			e.preventDefault();
			$("html,body").animate({scrollTop: 2760}, 600);
		});


		$("#back_to_five").click(function (e){
			e.preventDefault();
			$("html,body").animate({scrollTop: 3800}, 600);
		});
	}



}); // this ends the document ready stuff -- DO NOT DELETE!!!

// la di da javascript is mean it never tells you exactly what's wrong
// if you're going to have monospaced font you might as well have columns
// helps to identify which "unexpected identifier" or "token )" you're talking about
// but it does cool shit and the colors are beautiful
// hi gabi and zach if you're reading this congrats you found my surprise #2




