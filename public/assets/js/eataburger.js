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
  $("#add").on("submit", function(event){
    event.preventDefault();
    var newBurger = {
      name: $("#add-burger").val().trim()
    };
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function(){
        location.reload();
      }
    );
  });
});