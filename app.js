let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


function getComputerChoice(){
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random()*3);
  return choices[randomNumber]
}

function win(userChoice){
  userScore++;
  userScore_span.innerHTML = userScore;
  result_div.innerHTML = 'You win';
  document.getElementById(userChoice).classList.add('green-glow');
  setTimeout(function(){document.getElementById(userChoice).classList.remove('green-glow')}, 300)
 

}

function lose(userChoice){
  computerScore++;
  computerScore_span.innerHTML = userScore
  result_div.innerHTML = 'You Lose'
  document.getElementById(userChoice).classList.add('red-glow');
  setTimeout(function(){document.getElementById(userChoice).classList.remove('red-glow')}, 300)

}

function draw(userChoice){
  result_div.innerHTML = 'Draw'
  document.getElementById(userChoice).classList.add('gray-glow');
  setTimeout(function(){document.getElementById(userChoice).classList.remove('gray-glow')}, 300)
}


function game(userChoice){
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice){
    case 'rs':
    case 'pr':
    case 'sp':
      win(userChoice)
      break;
    case 'rp':
    case 'ps':
    case 'sr':
      lose(userChoice)
      break;
      case 'rr':
      case 'pp':
      case 'ss':
        draw(userChoice)
         break;

  }
}


function main(){
  rock_div.addEventListener('click', function(){
    game('r')
  })

  paper_div.addEventListener('click', function(){
    game('p')
  })

  scissors_div.addEventListener('click', function(){
    game('s')
  })
}

main()
