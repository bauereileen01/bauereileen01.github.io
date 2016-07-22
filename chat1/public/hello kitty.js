$("#chat-form").submit(function(){
	//check name first_doesn't work
	// if($("#chat-name").attr("value") == null)
 //    {
 //        alert("have a name first");
 //        return false;
 //    }
    var messageObject ={};
    messageObject.username = $("#chat-name").val();
    messageObject.text = $("#chat-input").val();
	socket.emit("chat message", messageObject);//refrencing io commend to the server, emit: send message
	$("#chat-input").val("");
    return false;// on flash

});//end of chat-form


var valuePic;//**********when I have pics  form emoji-box
$("#emoji-box input").click(function(){
    console.log($(this).val());
    valuePic =$(this).val();
    });

$("#emoji-box").submit(function(e){
    var emoObject ={};
    emoObject.link = $("#"+valuePic).attr("src");
     console.log(emoObject.link);
     //console.log($("#emoji-box").val() );
    socket.emit("emoji", emoObject);//refrencing io commend to the server, emit: send message
     $("#emoji-box input").attr("src");
     return false;// on flash

});//end of form

ocket.on("emoji", function(iim){
  $("#chat-log ul").append("<li class='me'><img src="+  iim.link + " width='40' height='40'></li>");
  console.log(iim.link );
    
});// end of socket on message
 $("#emoji").click(function(){
           $("#emoji-box").css("display","block");
        });// click function
        $("#close-emoji").click(function(){
           $("#emoji-box").css("display","none");
  });// click function
//**********when I have pics  form emoji-box

if (data.length>1) 
{$("#chat-log").append("<div style='color:#999999'>this is history</div>");}



