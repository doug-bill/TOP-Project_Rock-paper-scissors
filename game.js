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


    return humanChoice;
}


function capitalize(string){

const lower = string.toLowerCase();
const firstLetter = lower.slice(0,1);
const firstUpper = firstLetter.toUpperCase();
const result = firstUpper + lower.slice(1);
return(result);
}

//console.log(capitalize(getHumanChoice()));
   

console.log("Computer Choose: " + getComputerChoice(3));
console.log("Human Chose: " + getHumanChoice());


console.log("Human: "+ humanScore);
console.log("CPU: "+ computerScore);