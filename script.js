let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
  return Math.floor(Math.random() * 10); // returns a random number between 0 and 9
};

function getAbsoluteDistance(guessNum, targetNum) {
  return Math.abs(guessNum - targetNum);
};

function checkHumanGuess(humanGuess) {
  if (humanGuess < 0 || humanGuess > 9) {
    window.alert("Your number is out of range.\nPlease enter a number between 0 and 9");
    exit;
  };
};

function compareGuesses(humanGuess, compGuess, targetNumber) {
  checkHumanGuess(humanGuess)
  // difference between human guess and the target number
  const humanTargetDiff = getAbsoluteDistance(humanGuess, targetNumber); //Math.abs(humanGuess - targetNumber)

  // difference between computer guess and the target number
  const compTargetDiff = getAbsoluteDistance(compGuess, targetNumber); //Math.abs(compGuess - targetNumber)

  if (humanTargetDiff === compTargetDiff) {
    return true; // human wins
  } else if (humanTargetDiff < compTargetDiff) {
    return true; // human wins
  } else {
    return false; // computer wins
  }
};

function updateScore(winner) {
  if (winner === 'human') {
    humanScore += 1;
  } else {
    computerScore += 1;
  }
};

function advanceRound() {
  currentRoundNumber += 1;
};
