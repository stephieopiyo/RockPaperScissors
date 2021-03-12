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

let choicesBtn = document.querySelectorAll('.choice');

choicesBtn.forEach(choicebtn => { choicebtn.addEventListener('click', e => { 
  const choiceName = choicebtn.dataset.choices;
  const choice = Choices.find(choice => choice.name === choiceName);
//console.log(choiceName);
  yourSelection(choice);
});
});

function yourSelection(choice){
  const computerSelection = randomSelection();
  console.log(computerSelection);
}

function randomSelection(){
  const randomIndex = Math.floor(Math.random() * Choices.length);
  return Choices[randomIndex];
}

function checkWinner(){
  
}
