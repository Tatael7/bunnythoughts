$.get("/api/all", function(data) {
    console.log(data);
    if (data.length !== 0) {
        for( let i = 0; i < data.length; i++) {
            let row = $("<div>");
            row.addClass("thoughts");

            row.append("<p>" + data[i].author + " thought...</p> ");
            row.append("<p>" + data[i].thoughts + "</p>");

            $("#thoughts-area").prepend(row);
        }
    }
});

$("#submit").on("click", function(event) {
    event.preventDefault();

    let newThought = {
        author: $("#author").val().trim(),
        thought: $("#thoughts").val().trim()
    }

    console.log(newThought);

    $.post("/api/new", newThought)
    .then(function(){
        let row= $("<div>");
        row.addClass("thought");

        row.append("<p>" + newThought.author + "</p>");
        row.append("<p>" + newThought.thought + "</p>");

        $("#thoughts-area").prepend(row);

    });

    $("#author").val("");
    $("#thoughts").val("");
});

