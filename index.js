$(document).ready(function () {
    $("#para").hide(); 

    $("#input").focus();

    $("#submit").click(function(){
        var input = $("#input").val();
        var isValid = true;

        //Validate the first entry
        if(input == "") { 
            $("#para").show();
            isValid = false;
        } else {
            $("#input").next().text("");
        }

        // submit the form if all entries are valid
        if (isValid) {
            var result = input * 0.79;
            var converted_currency = "CAD " + input + " converts to " + result + " USD.";
            $("#para").text(converted_currency);
            $("#para").show();
            $("#form").submit();
        }
    });

    $("#season").click(function(){
        var season = prompt("Enter a season name");
        season = season.toLowerCase();
        $("#para").show();
        // winter, spring, summer, fall
        //to check if value is empty
        if(season == ""){
            alert("Please enter a season name");
        }

        //check values agaisnt season
        if(season == "winter"){
            $("#para").text("Winter");
        }else if(season == "spring"){
            $("#para").text("Spring");
        }else if(season == "summer"){
            $("#para").text("Summer");
        }else if(season == "fall"){
            $("#para").text("Fall");
        }else{
            $("#para").text("Enter a valid season");
        }
    })
});