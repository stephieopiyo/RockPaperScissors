let Choices = [
  {
    name: 'rock',
    emoji: '✊',
    beats: 'scissors'
  },
  {
    name: 'paper',
    emoji: '✋',
    beats: 'rock'
  },
  {
    name: 'scissors',
    emoji: '✌',
    beats: 'paper'
  }
  
];
let winner = document.querySelector('.winner-message');
let playerScore = document.querySelector('[data-player-score]');
let computerScore = document.querySelector('[data-computer-score]');
let choicesBtn = document.querySelectorAll('.choice');

choicesBtn.forEach(choicebtn => { choicebtn.addEventListener('click', e => { 
  const choiceName = choicebtn.dataset.choices;
  const choice = Choices.find(choice => choice.name === choiceName);
  yourSelection(choice);
});
});

function yourSelection(choice){
  const computerSelection = randomSelection();
  isWinner(choice, computerSelection);
  console.log(computerSelection);
}

function randomSelection(){
  const randomIndex = Math.floor(Math.random() * Choices.length);
  return Choices[randomIndex];
}

function isWinner(player, computer){
  if(player.beats === computer.name ){
    winner.textContent = 'You Won!!!';
    playerScore.innerText = Number(playerScore.innerText) + 1;
  }
  else if(computer.beats === player.name){
    winner.textContent = 'Computer Won!!!';
    computerScore.innerText = Number(computerScore.innerText) + 1;
  }
  else {
    winner.textContent = 'You Drew!!!';
  }
}