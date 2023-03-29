


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
    
    document.getElementById("newText").innerHTML = winOrLose;
    hide();
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
    
    document.getElementById("newText").innerHTML = winOrLose;
    hide();
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
    
    document.getElementById("newText").innerHTML = winOrLose;
    hide();
}
function hide(){
    document.getElementById("Intro").style.display= "none";
}