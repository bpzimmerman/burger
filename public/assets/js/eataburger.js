$(document).ready(function(){
  // forces the delete select to start off blank
  $("#del-burger").val("");

  // removes the is-invalid class from the add-burger text box and the del-burger select box when the box gets focus (is-invalid is set when the box is submitted empty)
  $("#add-burger").focus(function(){
    $("#add-burger").removeClass("is-invalid")
  });
  $("#del-burger").focus(function(){
    $("#del-burger").removeClass("is-invalid")
  });

  // on-click event to eat or re-make a burger
  $(".change-eaten").on("click", function(event){
    // assigns the data from the clicked button to variables
    var burgerId = parseInt($(this).attr("data-id"));
    var devour = $(this).attr("data-eat");

    // puts the data into an object
    var eatenStatus = {
      id: burgerId,
      devoured: devour
    };

    // ajax call to the put route api 
    $.ajax("/api/burgers", {
      type: "PUT",
      data: eatenStatus
    }).then(
      function(){
        location.reload();
      }
    );
  });

  // on-click event to add a burger to the list
  $("#add").on("submit", function(event){
    event.preventDefault();
    // assigns the value of the text box to a variable
    var add = $("#add-burger").val().trim();
    // if the text box is submitted empty, adds the is-invalid class
    if (add === ""){
      $("#add-burger").addClass("is-invalid");
    } else {
      // assigns the value of the text box to the 'name' property of the 'newBurger' object
      var newBurger = {
        name: add
      };
      // ajax call to the post route
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function(){
          location.reload();
        }
      );
    };
  });

  // on-click event to delete a burger from the list
  $("#del").on("submit", function(event){
    event.preventDefault();
    // assigns the value of the text box to a variable
    var del = $("#del-burger").val();
    // if the select box is submitted empty, adds the is-invalid class
    if (del == null){
      $("#del-burger").addClass("is-invalid");
    } else {
      // assigns the value of the select box to the 'id' property of the 'delBurger' object
      var delBurger = {
        id: del
      };
      // ajax call to the post route
      $.ajax("/api/burgers",{
        type: "DELETE",
        data: delBurger
      }).then(
        function(){
          location.reload();
        }
      );
    };
  });
});