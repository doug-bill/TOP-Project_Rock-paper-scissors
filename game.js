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

function playRound (){

   if (humanSelection == "Rock" && computerSelection == "Rock"){
      console.log("DRAW");
     
   } else if (humanSelection == "Rock" && computerSelection == "Paper"){
      console.log("Computer won this round");
      computerScore += 1;
   } else if (humanSelection == "Rock" && computerSelection == "Scissors"){
      console.log("You've won this round");
      humanScore += 1;
   } else if (humanSelection == "Paper" && computerSelection == "Rock"){
      console.log("You've won this round");
      humanScore += 1;
   } else if (humanSelection == "Paper" && computerSelection == "Paper"){
      console.log("DRAW");
   } else if (humanSelection == "Paper" && computerSelection == "Scissors"){
      console.log("Computer won this round");
      computerScore += 1;
   } else if (humanSelection == "Scissors" && computerSelection == "Rock"){
      console.log("Computer won this round");
      computerScore += 1;
   } else if (humanSelection == "Scissors" && computerSelection == "Paper"){
      console.log("You've won this round");
      humanScore += 1;
   } else if (humanSelection == "Scissors" && computerSelection == "Scissors"){
      console.log("DRAW");
      
   }
   console.log("Human: "+ humanScore);
   console.log("CPU: "+ computerScore);
   console.log("Human Chose: " + getHumanChoice());
   console.log("Computer Choose: " + getComputerChoice(3));
}


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection,computerSelection);



//console.log("Human Chose: " + getHumanChoice());
//console.log("Computer Choose: " + getComputerChoice(3));


/*
console.log("Computer Choose: " + getComputerChoice(3));
console.log("Human Chose: " + getHumanChoice());


console.log("Human: "+ humanScore);
console.log("CPU: "+ computerScore);
*/