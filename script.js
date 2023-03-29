

 

function play(){
    for (i=0; i<3; i++)
    var min = Math.ceil(1);
    var max =  Math.floor(4);
    var winOrLose = "";

    document.getElementById("PSR").style.display = "block";

    if (playerChoice="rock"){
        
        var compChoice = Math.floor(Math.random() * (max-min) + min);

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
    else if (playerChoice="paper"){

        var compChoice = Math.floor(Math.random() * (max-min) + min);

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
    else {
        
        var compChoice = Math.floor(Math.random() * (max-min) + min);

        if (compChoice == 1){
            winOrLose = "Lose";
        }
        else if (compChoice == 2){
            winOrLose = "Win";
        }
        else {
            winOrLose = "Draw";
        }

    }
}

/*function rock(){

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
    
    document.getElementById("newText").innerHTML = winOrLose;
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
    
    document.getElementById("newText").innerHTML = winOrLose;
    hide();
    playcount++
}
function hide(){
    document.getElementById("Intro").style.display= "none";
}

function hidegame(){
    document.getElementById("PSR".style.display="")

}*/