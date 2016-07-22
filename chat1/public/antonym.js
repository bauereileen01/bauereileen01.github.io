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