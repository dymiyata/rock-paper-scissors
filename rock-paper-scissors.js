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


function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function updateScore() {
    scoreP.textContent = `Player: ${humanScore} Computer: ${computerScore}`;
  }

  function resetScore() {
    humanScore = 0;
    computerScore = 0;
  }

  function checkWinner() {
    if (humanScore >= 5) {
      finalResultP.textContent = 'Player Wins the Game!';
      resetScore();
    } else if (computerScore >= 5) {
      finalResultP.textContent = 'Computer Wins the Game!';
      resetScore();
    } else {
      finalResultP.textContent = '';
    }
  }

  function playRound(humanChoice, computerChoice) {
    if (humanChoice.toLowerCase() === computerChoice) {
      resultText = `It's a Tie! Both chose ${computerChoice[0].toUpperCase()}${computerChoice.slice(1)}.`;
    }
    if (humanChoice.toLowerCase() === 'rock' && computerChoice === 'paper') {
      computerScore++;
      resultText = 'You lose! Paper beats Rock.';
    }
    if (humanChoice.toLowerCase() === 'rock' && computerChoice === 'scissors') {
      humanScore++;
      resultText = 'You Win! Rock beats Scissors.';
    }
    if (humanChoice.toLowerCase() === 'paper' && computerChoice === 'scissors') {
      computerScore++;
      resultText = 'You lose! Scissors beats Paper.';
    }
    if (humanChoice.toLowerCase() === 'paper' && computerChoice === 'rock') {
      humanScore++;
      resultText = 'You Win! Paper beats Rock.';
    }
    if (humanChoice.toLowerCase() === 'scissors' && computerChoice === 'rock') {
      computerScore++;
      resultText = 'You lose! Rock beats Scissors.';
    }
    if (humanChoice.toLowerCase() === 'scissors' && computerChoice === 'paper') {
      humanScore++;
      resultText = 'You Win! Scissors beats Paper.';
    }
    currentGameResultP.textContent = resultText;
    updateScore();
    checkWinner();
  }


  // ************************************************

  const body = document.querySelector('body');

  const resultDiv = document.createElement('div');
  const currentGameResultP = document.createElement('p');
  const scoreP = document.createElement('p');
  updateScore();
  const finalResultP = document.createElement('p')

  resultDiv.appendChild(scoreP);
  resultDiv.appendChild(currentGameResultP);
  resultDiv.appendChild(finalResultP);

  const rockButton = document.createElement('button');
  rockButton.innerText = 'Rock';
  const paperButton = document.createElement('button');
  paperButton.innerText = 'Paper';
  const scissorsButton = document.createElement('button');
  scissorsButton.innerText = 'Scissors';

  body.appendChild(rockButton);
  body.appendChild(paperButton);
  body.appendChild(scissorsButton);
  body.appendChild(resultDiv);

  rockButton.addEventListener('click', () => {
    playRound('rock', getComputerChoice())
  });
  paperButton.addEventListener('click', () => {
    playRound('paper', getComputerChoice())
  });
  scissorsButton.addEventListener('click', () => {
    playRound('scissors', getComputerChoice())
  });

}

playGame();
