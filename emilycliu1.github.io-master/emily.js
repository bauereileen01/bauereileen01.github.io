console.log("hello world!");


var myNumbers =[0,1,2,3,4,5,6,7,8,9];

for(var n = 0; n < myNumbers.length; n++)
{
	console.log(myNumbers[n]);
}


var myRainbow =["red", "orange", "yellow", "green", "blue", "purple"];

for(var n = 0; n < myRainbow.length; n++)
{
	console.log(myRainbow[n]);
}

for(var n = 0; n < myRainbow.length; n+=3)
{
	console.log(myRainbow[n]);
}