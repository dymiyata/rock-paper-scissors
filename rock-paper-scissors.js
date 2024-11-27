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

