function getComputerChoice() {
  const randNum = 3 * Math.random();
  if (randNum < 1) {
    return 'rock';
  }
  if (randNum < 2) {
    return 'paper';
  }
  return 'scissors';
}

function getHumanChoice() {
  let num = Number(prompt("Enter 1 for Rock, 2 for Paper, or 3 for Scissors.\n Invalid entries will default to Rock", "1"));
  if (num == 2) {
    return 'paper';
  }
  if (num == 3) {
    return 'scissors';
  }
  return 'rock';
}