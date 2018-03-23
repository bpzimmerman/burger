$(document).ready(function(){
  $(".change-eaten").on("click", function(event){
    var id = $(this).attr("data-id");
    var devour = $(this).attr("data-eat");

    var eatenStatus = {
      devoured: devour
    };
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: eatenStatus
    }).then(
      function(){
        location.reload();
      }
    );
  });
});