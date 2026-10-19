//the clicker button program

let count=0;

$("#needy-button").click( function (){
    //what to do when button is clicked
    count = count + 1;
    $("#needy-button").html ("I was clicked " + count + " times");
});