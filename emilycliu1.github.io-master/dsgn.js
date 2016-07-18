/*

console.log("Hello, world!");

var skyColor = "blue";
console.log("The sky is " +skyColor+ " today.");

var temp = 50;
var hum = 1.5;
console.log("The temperature is " +temp+ " degrees.");
console.log("The humidity is " +hum+ ".");

var realTemp = temp * hum;
console.log("The real temperature is " +realTemp+ " today.");

// If Then ------------------------------------

var umbrella;
var raining = true;
if (raining == true)
{
	umbrella = true;
}else{
	umbrella = false;
}
console.log("It is " +umbrella+ " that you should bring an umbrella.");


var scarfOn;
if(realTemp < 66)
{
	scarfOn = true;
}else{
	scarfOn = false;
}
console.log("It is " +scarfOn+ " that you should wear a scarf today.");

// Loops ------------------------------------

var step;
for(step = 0; step <= 5; step++)
{
	console.log("step " +step+ "!");
}


var stomp = 0;
while(stomp <= 5)
{
	console.log("stomp " +stomp+ "!");
	stomp++;
}


var temp = 50;
var dailyTemps = [65, 66, 65, 67, 78, 50];
console.log("Today's temperature is " +temp+ " degrees.");
console.log("The temperatures from last week are " +dailyTemps+ ".");

var weekAgoPlusToday = temp + dailyTemps[0];
console.log("The temperature from a week ago plus today's temperature is " +weekAgoPlusToday+ ".");


for(var dayNum = 0; dayNum < dailyTemps.length; dayNum++)
{
	console.log("The temperature on day " +dayNum+ " is " +dailyTemps[dayNum]+ " degrees.");
}

console.log("------------------------------------------")


// PRACTICE ------------------------------------

var myNumbers = [0,1,2,3,4,5,6,7,8,9];
var myRainbow = ["red", "orange", "yellow", "green", "blue", "violet"];
var weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

// The odd numbers are
for(var n=1; n < myNumbers.length; n+=2)
{
	console.log(myNumbers[n]);
}

// The first 10 numbers after 100 are
for(var n = 0; n < myNumbers.length; n++)
{
	console.log(myNumbers[n] + 101);
}

// The primary colors are
for(var n = 0; n < myRainbow.length; n+=2)
{
	console.log(myRainbow[n]);
}

// Arrays as objects ------------------------------------

var car = new Object;
car.price = 12000;
car.color = "blue";
car.size = "sedan";
car.mpg = 34;
car.convertible = false;

console.log(car.price * 1.25);
console.log(car["price"] * 1.25);
console.log("The car is " + car.color);

// FUNCTIONS ------------------------------------

var A = 1;
var B = 2;
var C = 3;
var D = 4;

function doTheThing(firstN, secondN)
{
	console.log("We are doing the thing with " +firstN+ " and " +secondN);
	console.log(firstN + secondN);
	console.log(firstN - secondN);
	console.log(firstN * secondN);
	console.log(firstN / secondN);
}

doTheThing(A,B);
doTheThing(B,C);
doTheThing(C,D);
doTheThing(D,A);

// Using "Return" ------------------------------------

function whichGreater(firstN, secondN)
{
	if (firstN > secondN)
	{
		return firstN
	}else{
		return secondN;
	}
}

var theGreater;
theGreater = whichGreater (A,B);
console.log("The greater number between A and B is " +theGreater);

var theGreater;
theGreater = whichGreater (C,D);
console.log("The greater number between C and D is " +theGreater);

// Storing Options ------------------------------------

var firstCarOption = researchACar();
var secondCarOption = researchACar();
var thirdCarOption = researchACar();

function researchACar(whichCar)
{
	whichCar = new Object;
	whichCar.price = 12000;
	whichCar.color = "blue";
	whichCar.size = "sedan";
	whichCar.convertible = false;
	whichCar.mpg = 20 + (Math.round(Math.random() * 20));

	return whichCar;
}

console.log(firstCarOption);
console.log(secondCarOption);
console.log(secondCarOption);

*/

// Log an array of five car options, each with different random MPG

var myCars = []; // Tells computer that there will be an array later called myCars

function researchACar(whichCar) // Creates a car
{
	whichCar = new Object;
	whichCar.price = 15000;
	whichCar.color = "red";
	whichCar.size = "minivan";
	whichCar.convertible = "false";
	whichCar.mpg = 20 + (Math.random() * 20);

	return whichCar;
}

for(var n = 0; n <= 4; n++) // Makes five results
	{
		myCars[n] = researchACar(); // Puts the results of researchACar into myCars
	}

console.log(myCars);
















