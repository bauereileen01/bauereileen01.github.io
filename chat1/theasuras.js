			messageObject.username = $("#chat_name").val();
			messageObject.text = "";

		var originalMessage = $("#chat_input").val(); // just another way to say the message
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
			console.log(messageObject.text);

			socket.emit("chat message", messageObject); // emit a message called "chat message", and attach the object to it
			$("#chat_input").val(""); // empty the text box now that you hit send
			return false;
		}

		function inputNewWord(data)
		{
			// console.log(data);
			var dataArray = data.split('['); // split along :[
			var listSynonyms = dataArray[1]; // pick the second object of the array (after the part of speech and syn label)
			// console.log(listSynonyms); // should be one object of quoted synonyms
			var synonymArray = listSynonyms.split('","'); // split this list along "," to just get the words
			console.log(synonymArray); // should be an array of the words
			
			var newWord = synonymArray[Math.floor(Math.random() * synonymArray.length)];
			console.log(newWord); // this is the selected word

			if (newWord == undefined) // if it doesn't exist, do original and apologize
			{
				messageObject.text = originalMessage + " (No related term available for " +originalWord+ ")";
				console.log(messageObject.text);
				sendItIn(); 
			} else { // otherwise split it by character and work with that
				var newWordArray = newWord.split(""); 
			};

			// SPLIT AND HANDLED ACCORDINGLY OR PERFECT

			if (newWordArray[0] == '"' && newWordArray[newWordArray.length -1] == ':') // if it starts with " AND ends with :
			{
				var splitByQuotes = newWord.split('"'); // split it by quotation marks
				console.log(splitByQuotes);
				messageObject.text = originalMessage.split(originalWord).join('"'+splitByQuotes[1]+'"'); // take the second thing and add quotations
				console.log(messageObject.text);
				sendItIn();
			} else if (newWordArray[newWordArray.length -1] == ':') // if it ends with a colon, split it up and fix
			{
				var splitByQuotes = newWord.split('"');
				console.log(splitByQuotes);
				messageObject.text = originalMessage.split(originalWord).join('"'+splitByQuotes[0]+'"');
				console.log(messageObject.text);
				sendItIn();
			} else if (newWordArray[0] == '"') // if it starts with a ", add a quote to the end
			{ 
				messageObject.text = originalMessage.split(originalWord).join(newWord+ '"');
				console.log(messageObject.text); // this is what's coming up
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

	// this is to indicate who said what
	socket.on("chat message", function(msg){ // when socket gets a message called chat message, do this function
		if(msg.username == $("#chat_name").val())
		{
			$("#chat_log ul").append("<li class = 'me_line'><b>" +msg.username+ "</b>: " +msg.text+ "</li>"); // li means list item, so append that message into the <ul>
		} else {
			$("#chat_log ul").append("<li class = 'them_line'><b>" +msg.username+ "</b>: " +msg.text+ "</li>");	
		}
	});	
});