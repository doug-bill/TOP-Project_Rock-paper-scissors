/*
create the game Rock Paper Scissors. 
This game will be played entirely in the console.

1 -  Prompt the player to choose between , Rock, Paper or Scissors and
save the answer on a variable.

2 - Create a variable that store a random result to go against the players choice
Math.random[3]

*/

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
       computerScore =+ 1;
      }
      else if (humanChoice == "Scissors" && computerChoice == "Rock"){
       console.log("Computer Won this round!");
       console.log("You Choose: "+humanChoice);
       console.log("CPU Choose: " + computerChoice);
       computerScore =+ 1;
      }
      else if(humanChoice == "Scissors" && computerChoice == "Paper"){
       console.log("You've won this round!");
       console.log("You Choose: "+humanChoice);
       console.log("CPU Choose: " + computerChoice);
       humanScore =+1;
      }
      else {
       console.log("DRAW");
       console.log("You Choose: "+humanChoice);
       console.log("CPU Choose: " + computerChoice);
   }
}

/*

    Create a new function named playGame.
    Move your playRound function and score variables so that they’re declared inside of the new playGame function
    Play 5 rounds by calling playRound 5 times.
        Hint: When you assign a function call to a variable, the return value of that function is assigned to the variable. Accessing the variable afterward will only provide the assigned value; it doesn’t recall the function. You need to recall the choice functions to get new choices for each round.
        Re-work your previous functions or create more helper functions if necessary. Specifically, you may want to change the return values to something more useful.
        If you already know about loops, you can use them. If not, don’t worry! Loops will be covered in the next lesson.
*/

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