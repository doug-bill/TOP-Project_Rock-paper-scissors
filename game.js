console.log("Hello");

var humanScore = 0;
var computerScore =0;
var cpu; 

function getComputerChoice(){
    
    cpu = Math.random(3);
    return cpu;
}

console.log("cpu choice is:" + cpu);