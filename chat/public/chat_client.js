$(document).ready(function(){

	var socket = io();

	var li_me = "<li class='me-line'><b>";
	var li_them = "<li class='them-line'><b>";
	console.log($("#chat-name").val());
		var d = new Date();
	var localDate = d.toLocaleDateString();
	var localTime = d.toLocaleTimeString();
	var tzo = d.getTimezoneOffset()/60;
<!--	var thisNow = d.getDate()+"/"+d.getDay()+"/"+d.getFullYear()+ " "+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds()+" +"+ tzo; -->
	var thisNow = localDate + " " + localTime;
	console.log(thisNow);
	var now = "<small>"+thisNow+"</small>";

	var colors = ['#345321', '#888888', '#000011','#FF9933','FFFFFF','#FFE4C4'];

	$("#chat-start").click(function(){
		if($("#chat-name").val() == "")
	    {   
		    alert("Please enter a name first");
	        return false;
	    }
	    else{
		$.ajax({
			url:"http://localhost:3000/get_archive",
			success: function(data){
				$("#chat-log ul li").remove();
				for(var i=0;i<data.length;i++)
				{
					$("#chat-log ul").append(now + "<br>");
					var msg = data[i];
					if(msg.username == $("#chat-name").val())
			     		{$("#chat-log ul").append(li_me + msg.username + "</b> " + msg.text + "</li>");}
				    	else {$("#chat-log ul").append(li_them + msg.username+ "</b> " + msg.text + "</li>");}
				} //end of for
			} // end success
			}); // end ajax


          }
	});
	
	$("#send").click(function(e){ // when we click the button or hit enter, run these functions
		e.preventDefault();

		var messageObject = {};
		messageObject.username = $("#chat-name").val();
		messageObject.text = "";
		var originalMessage = $("#chat-input").val(); // just another way to say the message
		var originalArray = originalMessage.split(" "); // create an array from the inputted text
		var originalWord = originalArray[originalArray.length - 1]; // pick the last word from the array

		console.log(originalWord);

				$.ajax({
					url: "http://words.bighugelabs.com/api/2/7a63887bd3d6f4e542ff5b845c80cc80/"+originalWord+"/json", // the key is 7a63887bd3d6f4e542ff5b845c80cc80
					success: inputNewWord, // inputNewWord // this is the function that puts it back in the message
					error: keepOldWord
				});

				function keepOldWord()
				{
					messageObject.text = originalMessage + " (No related term available for " +originalWord+ ")"; // just do the original message
		//			console.log(messageObject.text);

					socket.emit("chat message", messageObject); // emit a message called "chat message", and attach the object to it
					$("#chat_input").val(""); // empty the text box now that you hit send
					return false;
				}

				function inputNewWord(data)
				{
		//			console.log(data);
					var dataArray = data.split('['); // split along :[
					var listSynonyms = dataArray[1]; // pick the 2nd object of the array (after the part of speech and syn label)
		//			console.log("one of synonyms "+ listSynonyms); // should be one object of quoted synonyms
					var synonymArray = listSynonyms.split('","'); // split this list along "," to just get the words
		//			console.log(synonymArray); // should be an array of the words

					var newWord = synonymArray[Math.floor(Math.random() * synonymArray.length)];
		//			console.log("Selected word: " + newWord); // this is the selected word

					if (newWord == undefined) // if it doesn't exist, do original and apologize
					{
						messageObject.text = originalMessage + " (No related term available for " +originalWord+ ")";
		//				console.log("No related term available for " + messageObject.text);
						sendItIn(); 
					} else { // otherwise split it by character and work with that
						var newWordArray = newWord.split(""); 
					};

					// Split and Handled Accordingly or Perfect

					if (newWordArray[0] == '"' && newWordArray[newWordArray.length -1] == ':') // if it starts with " AND ends with :
					{
						var splitByQuotes = newWord.split('"'); // split it by quotation marks
			//			console.log(splitByQuotes);
						messageObject.text = originalMessage.split(originalWord).join('"'+splitByQuotes[1]+'"'); // take the second thing and add quotations
			//			console.log(messageObject.text);
						sendItIn();
					} else if (newWordArray[newWordArray.length -1] == ':') // if it ends with a colon, split it up and fix
					{
						var splitByQuotes = newWord.split('"');
			//			console.log(splitByQuotes);
						messageObject.text = originalMessage.split(originalWord).join('"'+splitByQuotes[0]+'"');
			//			console.log(messageObject.text);
						sendItIn();
					} else if (newWordArray[0] == '"') // if it starts with a ", add a quote to the end
					{

					messageObject.text = originalMessage.split(originalWord).join(newWord+ '"');
			//						console.log(messageObject.text); // this is what's coming up
									sendItIn();
								} else // if it's perfect, then add quotations to both sides
								{ 
									messageObject.text = originalMessage.split(originalWord).join('"'+newWord+'"');
									console.log(messageObject.text);
									sendItIn();
								}

								function sendItIn()
								{
									socket.emit("chat message", messageObject); // emit a message called "chat message", and attach the object to it
									$("#chat_input").val(""); // empty the text box now that you hit send
									return false;
								}
							}	

						});
				
	// $("#chat-form").submit(function(){
	// 	var messageObject = {};
	// 	messageObject.username = $("#chat-name").val();
	// 
	// 	messageObject.text = $("#chat-input").val();
	// 	socket.emit("chat message", messageObject);
	// 	$("#chat-input").val("");
	// 	return false;
	// });

	socket.on('chat message', function(msg){
		$("#chat-log ul").append(now + "<br>");
		msgName= msg.username;
		console.log(msgName);
		console.log(msg);
		msgNameRedVal = msg.username.length*50;
				var userColor = "background-color:rgb("+msgNameRedVal+".100,100)";
		console.log(userColor);
		li_me = "<li class='me-line' style="+ userColor+ "><b>";
		li_them = "<li class='them-line' style=" +userColor+"><b>";
		if(msg.username == $("#chat-name").val())
		{$("#chat-log ul").append(li_me + msg.username + "</b> " + msg.text + "</li>");
		}else{$("#chat-log ul").append(li_them + msg.username + "</b> " + msg.text + "</li>");
		}
	}); // end of socket
	
//	$("l:").last().css("background-color":msgColor);
	$("#emojiShow").submit(function(e){
	   socket.emit("emojiShow", "Hello Kitty");
	  });//end of form

	socket.on("emojiShow", function(KTurl){
	  for(var i; i<KTurl.length; i++ ){
	  $("#emoji-box").append("<span><img src="+ KTurl[i] + " width='40' height='40'></span>");
	  console.log(KTurl);}
	});// end of socket

}); // end of client



