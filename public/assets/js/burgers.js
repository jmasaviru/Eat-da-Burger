// Handlers attached once DOM is fully loaded
$(".devoured").on("click", (e) => {
    var id = $(this).data("id");

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

$(() => {
    $(".create-form").on("submit", (e) => {
        e.preventDefault();

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
    });
  });
  
  $(".deleteburger").on("click", (e) => {
    var id = $(this).data("id");

    // Send DELETE request.
    $.ajax("/api/burgers" + id, {
      type: "DELETE",
    }).then(() => {
      console.log("Burger deleted!", id);
      // Reload page for updated list
      location.reload();
    });
  });
});
