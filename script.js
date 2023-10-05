// Step 1: Create a function to get a random computer choice.
function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

// Test the getComputerChoice function
const computerChoice = getComputerChoice();
console.log("Computer's Choice:", computerChoice);

