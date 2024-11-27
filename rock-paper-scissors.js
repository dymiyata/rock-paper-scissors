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

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice.toLowerCase() === computerChoice) {
    console.log(`It's a Tie! Both chose ${computerChoice[0].toUpperCase()}${computerChoice.slice(1)}.`);
  }
  if (humanChoice.toLowerCase() === 'rock' && computerChoice === 'paper') {
    computerScore++;
    console.log('You lose! Paper beats Rock.');
  }
  if (humanChoice.toLowerCase() === 'rock' && computerChoice === 'scissors') {
    humanScore++;
    console.log('You Win! Rock beats Scissors.');
  }
  if (humanChoice.toLowerCase() === 'paper' && computerChoice === 'scissors') {
    computerScore++;
    console.log('You lose! Scissors beats Paper.');
  }
  if (humanChoice.toLowerCase() === 'paper' && computerChoice === 'rock') {
    humanScore++;
    console.log('You Win! Paper beats Rock.');
  }
  if (humanChoice.toLowerCase() === 'scissors' && computerChoice === 'rock') {
    computerScore++;
    console.log('You lose! Rock beats Scissors.');
  }
  if (humanChoice.toLowerCase() === 'scissors' && computerChoice === 'paper') {
    humanScore++;
    console.log('You Win! Scissors beats Paper.');
  }
}

const computerChoice = getComputerChoice();
const humanChoice = getHumanChoice();

playRound(humanChoice, computerChoice);