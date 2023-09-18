var playing = false;
var score;
var trialsLeft;
$(function(){
    //click on start reset button
    $("#startreset").click(function(){
        //we are playing
        if(playing==true){
            //reload page
            location.reload();
        }else{
            //we are not playing
            playing = true; // game initiated
            //set score to zero
            score = 6;
            $("#scorevalue").html(score);

            //show trials left
            $("#trialsLeft").show();
            trialsLeft = 3;
            addHearts();

            //change button text to reset game
            $("#startreset").html("Reset Game");
            }
        
    });
});

//functions
function addHearts(){
    for(i=0; i < trialsLeft; i++ ){
        $("#trialsLeft").append('<img src="images/heart.png" class="life">');
}
}