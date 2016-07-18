/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function myFunction() {
    var person = prompt("Please enter Mary's last name", "??");
    var restOfSentence = ". And the original poem was written by Sarah Josepha Hale on May 24, 1830";
    if (person != null && person != "??") {
        if (person != "Sawyer") {document.getElementById("name").innerHTML = "Wrong!! Her name was Sawyer"+restOfSentence;}
                           else {document.getElementById("name").innerHTML = "Correct!! Her name was "+person+restOfSentence;}
    }   
    else {document.getElementById("name").innerHTML = "For shame!! You didn't enter her last name!!!";}
}


function myFunction() {
    var age, voteable;
    age = document.getElementById("age").value;
    voteable = (age < 18) ? "Too young":"Old enough";
    document.getElementById("demo").innerHTML = voteable + " to vote.";
}

$(document).ready(function(){
  $("#btn").click(function(){
    $("#box").animate({
      height: "300px",
      width: "300px"
    }, {
      duration: 5000,
      easing: "linear",
      complete: function(){
        $(this).after("<p>Animation is complete!</p>");
      }
    });
  });
});
