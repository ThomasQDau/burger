$(function() {
    $(".devour").on("click", function(event) {
      var id = $(this).data("id");
      $.ajax("/api/delete/" + id, {
        type: "DELETE"
      }).then(
        function() {
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
  
      var newBurger = { name: $("#burger").val().trim()};
      console.log(newBurger);
       
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          location.reload();
        }
      );
    });
  });
  