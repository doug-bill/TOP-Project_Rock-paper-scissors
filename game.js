var humanScore = 0;
var computerScore = 0;

let humanChoice;

function getComputerChoice(max) {
  
   var c = Math.floor(Math.random() * max);

   if (c == 0) {
      return ("Rock");
   }else if (c == 1) {
      return ("Paper");
   }else {
      return ("Scissors");
   }
}


const display = document.getElementById("resultDisplay");
display.style.height = "15px";
display.style.width = "375px";
display.style.margin = "auto";
display.style.marginTop = "24px";
display.style.padding = "10px";
display.style.textAlign = "center";
display.style.background = "white";
display.textContent = "Result:";

const roundWinner = document.getElementById("roundWinner");
roundWinner.style.height = "15px";
roundWinner.style.width = "375px";
roundWinner.style.margin = "auto";
roundWinner.style.marginTop = "24px";
roundWinner.style.textAlign = "center";
roundWinner.style.background = "white";
roundWinner.style.padding = "10px";
roundWinner.textContent = "Who will win?";

const score = document.getElementById("Score");
score.style.margin = "auto";
score.style.padding = "10px";
score.style.height = "15px";
score.style.width = "375px";
score.style.marginTop = "24px";
score.style.background = "white";
score.textContent = "PLAYER: " + humanScore +" VS " + " CPU: "+ computerScore;


function playRound(humanChoice, computerChoice) {
  let result = {};

  if (humanChoice === computerChoice) {
    result = { winner: "Draw", message: `${humanChoice} === ${computerChoice}` };
  } 
  else if (
    (humanChoice === "Rock" && computerChoice === "Scissors") ||
    (humanChoice === "Paper" && computerChoice === "Rock") ||
    (humanChoice === "Scissors" && computerChoice === "Paper")
  ) {
    humanScore++;
    result = { winner: "Player", message: `${humanChoice} beats ${computerChoice}` };
  } 
  else {
    computerScore++;
    result = { winner: "CPU", message: `${computerChoice} beats ${humanChoice}` };
  }

  return result;
}

function updateUI(result) {
  if (result.winner === "Draw") {
    display.textContent = "DRAW";
  } else {
    display.textContent = `${result.winner} WON this round!`;
  }

  roundWinner.textContent = result.message;
  score.textContent = `PLAYER: ${humanScore} VS CPU: ${computerScore}`;
}


const container = document.getElementById("btn_container")

const btn = document.createElement("button");
btn.classList.add("button");
btn.textContent = "Rock";
btn.style.padding = "8px";
btn.style.marginLeft = "20px";
btn.style.marginRight = "10px";
container.appendChild(btn);

const btn2 = document.createElement("button");
btn2.classList.add("button");
btn2.textContent = "Paper";
btn2.style.padding = "8px";
btn2.style.marginRight = "10px";
container.appendChild(btn2);

const btn3 = document.createElement("button");
btn3.classList.add("button");
btn3.textContent = "Scissors";
btn3.style.padding = "8px";
btn3.style.marginRight = "10px";
container.appendChild(btn3);

const buttons = container.querySelectorAll(".button");

container.addEventListener("click", (event) =>{
   
   humanChoice = event.target.textContent;
   const computerChoice = getComputerChoice(3);

   const result = playRound(humanChoice , computerChoice);
   updateUI(result);
   checkWinner();    
});

function checkWinner(){

    var winner;

      if (humanScore >= 5){
        winner = "Player";
        buttons.forEach(btn => {
        btn.disabled = true;
        });

        if(confirm( winner + " Won the Game \nNew Game ?")){
        window.location.reload();        
        }
               
         } 
         else if (computerScore >= 5){
          winner = "CPU";
        
          buttons.forEach(btn => {
          btn.disabled = true;
          });

           if(confirm(winner + " Won the Game \nNew Game ?")){ 
             window.location.reload();
             }
         }
         else {
            null;
         }  


}
