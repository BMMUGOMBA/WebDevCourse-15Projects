var playing = false;
var score;
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
        }
    });
});