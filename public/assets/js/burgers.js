// Handlers attached once DOM is fully loaded
$(() => {
  $(".devour").on("click", (event) => {
    var id = $(this).data("id");
    var newDevoured = $(this).data("newdevoured");

    var devouredState = {
        devoured: newDevoured,
      };
      // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: devouredState,
      }).then(() => {
        console.log("Burger changed to", newDevoured);
        // Reload page for updated list
        location.reload();
      });
    });

    $(".create-form").on("submit", (event) => {
      // Prevent default
      event.preventDefault();
      
      var newBurger = {
        name: $("#burgr").val().trim(),
    };
    console.log(newBurger);

    // Send POST request.
    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger,
      }).then(() => {
        console.log("New Burger Created!", newBurger);
        // Reload page for updated list
      location.reload();
    }
    );
  });
});
