

var winOrLose = "";

function play(){
    if (playcount<3 || winOrLose != "win"){

        document.getElementById("PSR").style.display = "block";

    }
    else if (winOrLose = "win"){
        hide();
        document.getElementById("newText").innerHTML = "You win";
    }
    else if (playcount=3){
        hide();
        document.getElementById("newText").innerHTML = "You had your three turns greedy!!";
    }
    
}

function hide(){
    document.getElementById("PSR").style.display= "none";
}

function rock(){

    //variable
    
    var min = Math.ceil(1);
    var max =  Math.floor(4);
    var compChoice = Math.floor(Math.random() * (max-min) + min);
    var winOrLose = "";

    if (compChoice == 1){
        winOrLose = "Draw";
    }
    else if (compChoice == 2){
        winOrLose = "Lose";
    }
    else {
        winOrLose = "Win";
    }
    
    document.getElementById("result").innerHTML = winOrLose;
    hide();
    playcount++
}

function paper(){

    //variable
    
    var min = Math.ceil(1);
    var max =  Math.floor(4);
    var compChoice = Math.floor(Math.random() * (max-min) + min);
    var winOrLose = "";

    if (compChoice == 1){
        winOrLose = "Win";
    }
    else if (compChoice == 2){
        winOrLose = "Draw";
    }
    else {
        winOrLose = "Lose";
    }
    
    document.getElementById("result").innerHTML = winOrLose;
    hide();
    playcount++
}
function scissors(){

    //variable
    
    var min = Math.ceil(1);
    var max =  Math.floor(4);
    var compChoice = Math.floor(Math.random() * (max-min) + min);
    var winOrLose = "";

    if (compChoice == 1){
        winOrLose = "Lose";
    }
    else if (compChoice == 2){
        winOrLose = "Win";
    }
    else {
        winOrLose = "Draw";
    }
    
    document.getElementById("result").innerHTML = winOrLose;
    hide();
    playcount++
}
