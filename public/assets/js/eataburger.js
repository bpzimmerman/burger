$(document).ready(function(){
  $("#del-burger").val("");
  $(".change-eaten").on("click", function(event){
    var burgerId = parseInt($(this).attr("data-id"));
    var devour = $(this).attr("data-eat");

    var eatenStatus = {
      id: burgerId,
      devoured: devour
    };
    $.ajax("/api/burgers", {
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

  $("#del").on("submit", function(event){
    event.preventDefault();
    var delBurger = {
      id: $("#del-burger").val().trim()
    };
    $.ajax("/api/burgers",{
      type: "DELETE",
      data: delBurger
    }).then(
      function(){
        location.reload();
      }
    );
  });
});