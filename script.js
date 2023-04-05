function play(){
  var results = []; // Create an empty array to store the results
  
  for (var i = 0; i < 5; i++) {
    var min = 1;
    var max = 4;
    var compChoice = (Math.floor(Math.random() * (max - min)) + min); // Generate a random number between 1 and 3

    var playerChoice = prompt("Type in Rock, Paper, or Scissors");

    if (playerChoice == "Rock" && compChoice == 1) {
      alert("You draw");
      results.push("Draw");
    } else if (playerChoice == "Paper" && compChoice == 2) {
      alert("You draw");
      results.push("Draw");
    } else if (playerChoice == "Scissors" && compChoice == 3) {
      alert("You draw");
      results.push("Draw");
    } else if (playerChoice == "Rock" && compChoice == 3) {
      alert("You win");
      results.push("Win");
    } else if (playerChoice == "Paper" && compChoice == 1) {
      alert("You win");
      results.push("Win");
    } else if (playerChoice == "Scissors" && compChoice == 2) {
      alert("You win");
      results.push("Win");
    } else {
      alert("Invalid choice. Please choose Rock, Paper, or Scissors.");
      i--; // This is so the user doesn't use up a turn with an incorrect entry
    }
  }

  alert("Here are the results of your 5 matches: " + results.join(", ")); // Output the array to the user
}

