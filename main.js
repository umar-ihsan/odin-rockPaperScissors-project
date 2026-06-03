console.log("Let's begin the Game!")

function getComputerChoice(){
    let choice = Math.floor((Math.random()*10)%3);
    switch (choice){

        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissor";

    }
}


let getHumanChoice = ()=>{
   let placeholder = prompt("Enter your choice");
   humanChoice = placeholder.toLowerCase();
   return humanChoice;

}


function playGame(){

    let computerScore = 0;
    let humanScore = 0;

    function playRound(computerChoice, humanChoice){


        if (humanChoice == "rock" && computerChoice == "paper" ){
            console.log("You lose, paper beats rock")
            return computerScore = computerScore + 1;
        }
        else if (humanChoice == "rock" && computerChoice == "scissor" ){
            console.log("You win!, rock beats scissor")
            return humanScore = humanScore + 1;
        }
        else if (humanChoice == "rock" && computerChoice == "rock" ){
            console.log("Draw... rock equals rock")
            return 0;
        }
        else if (humanChoice == "paper" && computerChoice == "rock" ){
            console.log("You win!, paper beats rock")
            return humanScore = humanScore + 1;
        }
        else if (humanChoice == "paper" && computerChoice == "paper" ){
            console.log("Draw... paper equals paper")
            return 0;
        }
        else if (humanChoice == "paper" && computerChoice == "scissor" ){
            console.log("You lose, scissor beats paper")
            return computerScore = computerScore + 1;
        }
        else if (humanChoice == "scissor" && computerChoice == "rock" ){
            console.log("You lose, rock beats scissor")
            return computerScore = computerScore + 1;
        }
        else if (humanChoice == "scissor" && computerChoice == "paper" ){
            console.log("You win!, scissor beats paper")
            return humanScore = humanScore + 1;
        }
        else if (humanChoice == "scissor" && computerChoice == "scissor" ){
            console.log("Draw... scissor equals scissor")
            return 0;
        }

    }

    for (let i=0; i<5;i++){
       playRound(getComputerChoice(), getHumanChoice());
    }

    if (humanScore > computerScore){
        console.log( "Congrats!! You Won!");
    }
    else if (humanScore < computerScore){
      console.log( "You lost, gg well played.");
    }
    else{
        console.log( "It was a draw, better luck next time..");
    }
}

playGame();