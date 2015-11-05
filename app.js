$(document).ready(function(){
          
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
    alert("clicked");
  })

});

   