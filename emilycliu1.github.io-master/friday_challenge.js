$(document).ready(function()
{
	var line = "How I Wonder What You Are";
	var lineArray = line.split(" ");
	var currentWord = 1; // start at the first word

	// console.log(lineArray[2]); // just to check if the array input works (this would be "wonder")

	$("#next").click(function() // all the stuff below happens when the next button is clicked
	{
		$("#text").text(lineArray[currentWord]);
		currentWord++;

		if(currentWord == lineArray.length) // using double == because it's not defining, it's IF
		{
			currentWord = 0; // go back to the 0th word
		}



		// BACKGROUND
		function generateRandomColor() // to make a random color
		{ return Math.round(Math.random() * 255);} // if lower than 255, colors will be more dark/subdued

			var randomRed = generateRandomColor();
			var randomGreen = generateRandomColor();
			var randomBlue = generateRandomColor();
			var randomColor = "rgb(" +randomRed+ ", "+randomGreen+", "+randomBlue+" )"; // put in the different values of red green and blue

		$("#background").css({"background-color": randomColor}); // change background to that color

		// BUTTON
		function generateRandomColor2() // to make a different random color
		{ return Math.round(Math.random() * 255);}

			var randomRed2 = generateRandomColor2();
			var randomGreen2 = generateRandomColor2();
			var randomBlue2 = generateRandomColor2();
			var randomColor2 = "rgb(" +randomRed2+ ", "+randomGreen2+", "+randomBlue2+" )"; // put in the different values of red green and blue

		$("#next").css({"background-color": randomColor2}); // change button to that color


		// TEXT
		function generateRandomColor3() // to make ANOTHER random color
		{ return Math.round(Math.random() * 255);}

			var randomRed3 = generateRandomColor3();
			var randomGreen3 = generateRandomColor3();
			var randomBlue3 = generateRandomColor3();
			var randomColor3 = "rgb(" +randomRed3+ ", "+randomGreen3+", "+randomBlue3+" )"; // put in the different values of red green and blue

		$("#text").css({"color": randomColor3}); // change text to that color
	});
});