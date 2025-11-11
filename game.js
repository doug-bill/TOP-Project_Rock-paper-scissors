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
display.style.height = "30px";
display.style.width = "275px";
display.style.margin = "4px";
display.style.padding = "20px";
display.textContent = "Result:";

const roundWinner = document.getElementById("roundWinner");
roundWinner.style.height = "30px";
roundWinner.style.width = "275px";
roundWinner.style.margin = "4px";
roundWinner.style.padding = "20px";
roundWinner.textContent = "Who will win?";

const score = document.getElementById("Score");
score.style.margin = "4px";
score.style.padding = "20px";
score.style.height = "30px";
score.style.width = "275px";
score.textContent = "PLAYER: " + humanScore +" VS " + " CPU: "+ computerScore;


function playRound(humanChoice, computerChoice) {
   
   if (humanChoice == "Rock" && computerChoice == "Rock"){

      display.textContent = "DRAW";
      roundWinner.textContent = "ROCK === ROCK";

      } 
      else if (humanChoice == "Rock" && computerChoice == "Paper"){
     
      display.textContent = "CPU WON"; 
      roundWinner.textContent = "Paper Beats Rock";
      computerScore++ ;
      score.textContent = "PLAYER: " + humanScore +" VS " + " CPU: "+ computerScore;   

      } 

      else if (humanChoice == "Rock" && computerChoice == "Scissors"){
      
      display.textContent = "You've Won this Round!";
      roundWinner.textContent = "Rock Beats Scissors";
      humanScore++;
      score.textContent = "PLAYER: " + humanScore +" VS " + " CPU: "+ computerScore;
      
      }
      else if (humanChoice == "Paper" && computerChoice == "Rock"){

       display.textContent = "You've Won this Round!"  
       roundWinner.textContent = "Paper beats Rock";  
       humanScore++ ;
       score.textContent = "PLAYER: " + humanScore +" VS " + " CPU: "+ computerScore;
      }
      else if (humanChoice == "Paper" && computerChoice == "Paper"){
       
       display.textContent = "DRAW";
       roundWinner.textContent = "Paper == Paper";

      }
      else if (humanChoice == "Paper" && computerChoice == "Scissors"){
      
       display.textContent = "Computer Won This round";
       roundWinner.textContent = "Scissors Beats Paper";  
       computerScore ++;
       score.textContent = "PLAYER: " + humanScore +" VS " + " CPU: "+ computerScore;

      }
      else if (humanChoice == "Scissors" && computerChoice == "Rock"){
       
       display.textContent = "Computer Won this Round";
       roundWinner.textContent = "Rock Beats Scissors";
       computerScore ++;
       score.textContent = "PLAYER: " + humanScore +" VS " + " CPU: "+ computerScore;

      }
      else if(humanChoice == "Scissors" && computerChoice == "Paper"){
       
       display.textContent = "You've Won This Round";
       roundWinner.textContent = "Scissors Beats Paper"  
       humanScore ++;
       score.textContent = "PLAYER: " + humanScore +" VS " + " CPU: "+ computerScore;
      }
      else {
       console.log("DRAW");
       display.textContent = "DRAW";
       roundWinner.textContent = "Scissors === Scissors";
   }
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
   playRound(humanChoice , getComputerChoice(3));
 
      var winner;

      if (humanScore == 5){
        winner = "Player";
        buttons.forEach(btn => {
        btn.disabled = true;
        });

        if(confirm( winner + " Won the Game \nNew Game ?")){
        window.location.reload();        
        }
               
      } 
      else if (computerScore == 5){
        winner = "CPU";
        
        buttons.forEach(btn => {
        btn.disabled = true;
        });

        if(confirm(winner + " Won the Game \nNew Game ?")){ 
        window.location.reload();
      
        }
      }
      else {
       
      } 
   
  

});







/* 
function playGame(){

   for (let round = 1; round < 6; round++){
   
      console.log("Round: "+ round);

      const humanSelection = getHumanChoice();  
      const computerSelection = getComputerChoice(3);      

      playRound(humanSelection, computerSelection);  
    
      console.log("Player Score: " + humanScore);
      console.log("CPU Score: "+ computerScore);
   }
      var winner;

      if (humanScore > computerScore){
         winner = "You've Won the Game";
      }  
      else if (humanScore < computerScore) {
         winner = "CPU have Won the Game";
      }
      else if (humanScore = computerScore) {
         (alert("The Game ended in a TIE"));
      }
      else {

         alert(winner);
      }
}


playGame(); */