
function play() {
  var results = []; // Create an empty array to store the results
  
  for (var i = 0; i < 5; i++) {
    var min = Math.ceil(1);
    var max = Math.floor(4);
    var compChoice = Math.floor(Math.random() * (max - min) + min);

    var playerChoice = prompt("Type in Paper Scissors Rock");

    if (playerChoice == "Rock" && compChoice == 3) {
      alert("You win");
      results.push("Win");
    } else if (playerChoice == "Paper" && compChoice == 1) {
      alert("You win");
      results.push("Win");
    } else if (playerChoice == "Scissors" && compChoice == 2) {
      alert("You win");
      results.push("Win");
    } else if (playerChoice == "Rock" && compChoice == 1) {
      alert("You draw");
      results.push("Draw");
    } else if (playerChoice == "Paper" && compChoice == 2) {
      alert("You draw");
      results.push("Draw");
    } else if (playerChoice == "Scissors" && compChoice == 3) {
      alert("You draw");
      results.push("Draw");
    } else {
      alert("You lose");
      results.push("Loss");
    }
  }

  alert("Results: " + results.join(", ")); // Output the array to the user as a comma-separated string
}

function hide() {
  document.getElementById("button").style.display = "none";
}
