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
    }
}