$(document).ready(function(){
//search and filter stuff          
  $(document).keypress(function(e) {
    if(e.which == 13) {
       var filter = $('#sample6').val();

    // Loop through the comment list
      $(".individual-item").each(function(item){
        console.log(item);
          // If the list item does not contain the text phrase fade it out
          if ($(this).text().search(new RegExp(filter, "i")) < 0) {
              $(this).fadeOut();

          // Show the list item if the phrase matches 1
          } else {
              $(this).show();
              
          }
      });
    }
  });
  $("#reset-filter").on("click", function(){
    $(".individual-item").show();

  });

 window.onload = function() {
//get user info for each user
       var name, logo, streaming, desc, link, displayName; 
  $.getJSON("https://api.twitch.tv/kraken/users/freecodecamp", function(json) {
  
    logo = json.logo;
    displayName = json.display_name;
    name = json.name;
    link = json._links.self;
  
      });

//get stream info: if not null, get channel status description 
  $.getJSON("https://api.twitch.tv/kraken/streams/freecodecamp", function(json) {
    //status = json.stream
     //desc = json.stream.channel.status
    console.log(json); 
    console.log(status);

      });



    };//end of window load api calls
 



});

   