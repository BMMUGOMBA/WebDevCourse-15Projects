//javascipt.js
var playing = false;
var score;
var action;
var timeremaining;
var correctAnswer;

//if we click on start/reset button
document.getElementById("startreset").onclick=function(){

    //if we are playing

    if(playing == true){
        location.reload();//reload page
    } else {
        //if we are not playing
        //change mode to  playing
        playing = true;

        //set score to 0
        score = 0;
        document.getElementById("scorevalue").innerHTML = score;

        //show countdown box

        show("timeremaining");
        timeremaining = 60;
        document.getElementById("timeremainingvalue").innerHTML = timeremaining;
        
        //hide game over box
        
        hide("gameOver");
        
        //change button to reset
        document.getElementById("startreset").innerHTML = "Reset Game";
        
        //start countdown
        
        startCountdown();
        
        //generate a new Q&A
        
        generateQA();
    }
}