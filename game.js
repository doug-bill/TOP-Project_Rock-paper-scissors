var humanScore = 0;
var computerScore = 0;

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

function getHumanChoice(){
   
    let humanChoice = prompt("Type your choice for the Game:\n 1.Rock\n 2.Paper \n 3.Scissors");
     
    const lower = humanChoice.toLowerCase();
    const firstLetter = lower.slice(0,1);
    const firstUpper = firstLetter.toUpperCase();
    const result = firstUpper + lower.slice(1);
    return (result);
}


function playRound(humanChoice, computerChoice) {
   
   if (humanChoice == "Rock" && computerChoice == "Rock"){
      console.log("DRAW");
      console.log("You Choose: "+humanChoice);
      console.log("CPU Choose: " + computerChoice);
      } 
      else if (humanChoice == "Rock" && computerChoice == "Paper"){
      console.log ("Computer won this round!");
      console.log("You Choose: "+humanChoice);
      console.log("CPU Choose: " + computerChoice);
      computerScore++ ;
      } 
      else if (humanChoice == "Rock" && computerChoice == "Scissors"){
       console.log("You've won this round!");
       console.log("You Choose: "+humanChoice);
       console.log("CPU Choose: " + computerChoice);
       humanScore++ ;
      }
      else if (humanChoice == "Paper" && computerChoice == "Rock"){
       console.log("You've won this round!");
       console.log("You Choose: "+humanChoice);
       console.log("CPU Choose: " + computerChoice);
       humanScore++ ;
      }
      else if (humanChoice == "Paper" && computerChoice == "Paper"){
       console.log("DRAW");
       console.log("You Choose: "+humanChoice);
       console.log("CPU Choose: " + computerChoice);
      }
      else if (humanChoice == "Paper" && computerChoice == "Scissors"){
       console.log("Computer Won this round!");
       console.log("You Choose: "+humanChoice);
       console.log("CPU Choose: " + computerChoice);
       computerScore ++;
      }
      else if (humanChoice == "Scissors" && computerChoice == "Rock"){
       console.log("Computer Won this round!");
       console.log("You Choose: "+humanChoice);
       console.log("CPU Choose: " + computerChoice);
       computerScore ++;
      }
      else if(humanChoice == "Scissors" && computerChoice == "Paper"){
       console.log("You've won this round!");
       console.log("You Choose: "+humanChoice);
       console.log("CPU Choose: " + computerChoice);
       humanScore ++;
      }
      else {
       console.log("DRAW");
       console.log("You Choose: "+humanChoice);
       console.log("CPU Choose: " + computerChoice);
   }
}


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
      else {
         winner = "CPU have Won the Game";
         }

         alert(winner);
}

playGame();