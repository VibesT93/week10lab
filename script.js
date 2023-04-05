function play() {
  var results = []; // Create an empty array to store the results
  
  for (var i = 0; i < 5; i++) {
    var compChoice = Math.random() * 3 + 1; // Generate a random number between 1 and 3

    var playerChoice = prompt("Type in Paper Scissors Rock");

    if (playerChoice == "Rock" && compChoice == 1) {
      alert("You win");
      results.push("Win");
    } else if (playerChoice == "Paper" && compChoice == 2) {
      alert("You win");
      results.push("Win");
    } else if (playerChoice == "Scissors" && compChoice == 3) {
      alert("You win");
      results.push("Win");
    } else if (playerChoice == "Rock" && compChoice == 3) {
      alert("You draw");
      results.push("Draw");
    } else if (playerChoice == "Paper" && compChoice == 1) {
      alert("You draw");
      results.push("Draw");
    } else if (playerChoice == "Scissors" && compChoice == 2) {
      alert("You draw");
      results.push("Draw");
    } else {
      alert("You lose");
      results.push("Loss");
    }
  }

  alert("Here are the results of your 5 matches: " + results.join(", ")); // Output the array to the user

function hide() {
  document.getElementById("button").style.display = "none";
}
