$(function () {
    // Ajax Put request to change status to "devoured" 
    $(".change-devour").on("click", function (event) {
        event.preventDefault();
        var id = $(this).data("id");
        // var id = $(this).data("data-id");
        console.log("I just clicked id number " + id);

        var newDevour = $(this).data("newdevour");
        var newDevourState = {
            devoured: newDevour
        };

        $.ajax(`/api/burgers/${id}`, {
            type: "PUT",
            data: newDevourState
        }).then(() => {
            location.reload();
        });
    });

    // Ajax Post request to Add new burger 
    $(".create-form").on("submit", () => {
        event.preventDefault();
        var newBurger = {
            name: $("#burgerInput").val().trim()
        };
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(() => {
            // console.log(`New burger: ${newBurger} added`);
            location.reload();
        });
    });

    // Ajax Delete request to remove burger 
    $(".delete-burger").on("click", function (event) {
        var id = $(this).data("id");

        $.ajax(`/api/burgers/${id}`, {
            type: "DELETE"
        }).then(() => {
            console.log("deleted burger with id ", id);
            location.reload();
        });
    });
});


