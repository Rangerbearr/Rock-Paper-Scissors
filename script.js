function getComputerChoice(){
    let a = Math.floor(Math.random()*3);
    console.log(a);
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
let a = getComputerChoice();
console.log(a);