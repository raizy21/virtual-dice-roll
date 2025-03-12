function rollDice() {
  // generate a random number between 1 and 6
  var dice = Math.floor(Math.random() * 6) + 1;
  // display the dice
  document.getElementById("dice").innerHTML = dice;
}
