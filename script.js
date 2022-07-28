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
// function game(){
//     let a;
//     let b;
//     let c;
//     let compWins;
//     let playerWins;
//     for (let i =0; i<5; i++){
//         a = prompt("Rock Paper or Scissors: ");
//         b = getComputerChoice();
//         c = playRound(a,b);
//         if (c.includes("win")){
//             playerWins++
//         }
//         if(c.includes("lose")){
//             compWins++
//         }
//         console.log(c);
//     }
//     if(playerWins > compWins){
//         return "You Won";
//     }else if(compWins>playerWins){
//         return "You Lose"
//     }
//     else{
//         return"Tie";
//     }
// }

function playRound(a,b){
    // const score = document.querySelector('#score');
    // score.textContent = `${playerWins} - ${computerWins}`
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

//console.log(game());
let playerWins = 0;
let computerWins = 0;
const playerSelection = document.querySelectorAll('button');
playerSelection.forEach((button) => 
    button.addEventListener('click',() =>{
        let compChoice = getComputerChoice();
        let playerChoice = button.id;
        let a = playRound(playerChoice,compChoice);
        if(a.includes('win')){
            playerWins++;
        }else if(a.includes('lose')){
            computerWins++;
        }
        const results = document.querySelector('#results')
        results.textContent = a;
        const score = document.querySelector('#score');
        score.textContent = `${playerWins} - ${computerWins}`
        if(playerWins >4 || computerWins>4){
            playerWins = 0;
            computerWins = 0;
            const winner = document.querySelector('#winner');
            if(playerWins > computerWins){
                winner.textContent = 'you win';
            }else{
                winner.textContent = 'you lose';
            }
            return;
        }
    })
);