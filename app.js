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
//define users to loop over; set up vars for json response
  var users = ["freecodecamp", "storbeck", "medrybw", "justin", "flosd","RobotCaleb","imaqtpie","noobs2ninjas","goldglove"];
 var htmlStart = "";  

  $.each(users, function(index, value) {
         
    var name, logo, streaming, desc, link, displayName; 
   
    // loop over array of users & get user info for each user
    $.getJSON("https://api.twitch.tv/kraken/users/" + value, function(json) {
    
      logo = json.logo;
      displayName = json.display_name;
      name = json.name;
      link = "http://www.twitch.tv/" + json.name;
      
      //get stream info: if not null, get channel status description 
        $.getJSON("https://api.twitch.tv/kraken/streams/" + name, function(json) {
         
        status = json.stream;

        if(status !== 'null'){
          desc = json.stream.channel.status; 
        } 
       
        htmlStart += "<li class='individual-item'><img class='profile-pic' src='" + logo + "'/>" + "<a href='" + link + "'>" + name + "</li>";
        // console.log(name);
        // console.log(desc);
        // console.log(logo);
        // console.log(link);
        console.log(htmlStart); 
        $(".main-list").html(htmlStart);

        }); //end of inner seond API call

      });//end of first API call




    });//end of each loop

  };//end of window load api calls
 



});

   