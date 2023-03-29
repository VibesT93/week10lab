

function play(){

    for (i=0; i<3;i++){

        var min = Math.ceil(1);
        var max =  Math.floor(4);
        var compChoice = Math.floor(Math.random() * (max-min) + min);

        let playerChoice = prompt("Type in Paper Scissors Rock");

        if (playerChoice =="Rock" && compChoice == 3){
            alert ("You win");
            hide();
            i = 3;
        }
        else if (playerChoice == "Paper" &&  compChoice == 1){
            alert ("You win");
            hide();
            i = 3;
        }
        else if (playerChoice=="Scissors" && compChoice == 2){
            alert ("You win");
            hide();
            i = 3;
        }
        else if (playerChoice =="Rock" && compChoice == 1){
            alert ("You draw");
        }
        else if (playerChoice =="Paper" && compChoice == 2){
            alert ("You draw");
        }
        else if (playerChoice =="Scissors" && compChoice == 3){
            alert ("You draw");
        }
        else {
            alert("You lose")
            
        }
        hide();
        
    }
   
}

function hide (){
    document.getElementById("button").style.display ="none";
}