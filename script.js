function getComputerChoice(){
    let a = Math.floor(Math.random()*3);
    if (a === 2){
        return "rock";
    }
    else if (a === 1){
        return "paper";
    }
    else{
        return "scissors"
    }
}

function playRound(a,b){
    if (a === b){
        return "tie";
    }
    if(a === "rock" && b === "paper"){
        return "you lose " + b + " beats " + a;
    }
    if(a==="rock" && b === "scissors"){
        return "you win " + a + " beats " + b;
    }
    if(a === "paper" && b === "scissors"){
        return "you lose " + b + " beats " +a;
    }
    if(a==="paper" && b ==="rock"){
        return "you win "+a+" beats "+b;
    }
    if(a==="scissors"&&b==="rock"){
        return "you lose "+b+" beats "+a;
    }
    if(a==="scissors"&&b==="paper"){
        return "you win "+a+" beats "+b;
    }
}
const playerSelection = prompt("Rock Paper or Scissors: ");
const computerChoice = getComputerChoice();

console.log(playRound(playerSelection,computerChoice));