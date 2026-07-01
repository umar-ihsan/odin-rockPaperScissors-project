console.log("Let's begin the Game!")



const choice = document.querySelector(".choices");
const roundresult = document.querySelector(".result p");
const compScoreUI = document.querySelector(".computer-score span")
const humScoreUI = document.querySelector(".human-score span")


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


let getHumanChoice = (e)=>{
   let placeholder = e.target.innerText;
  let humanChoice = placeholder.toLowerCase();
   console.log(humanChoice)
   return humanChoice;

}

///////////////////////////////////////////////////

let computerScore = 0;
let humanScore = 0;

function playRound(computerChoice, humanChoice){


    if (humanChoice == "rock" && computerChoice == "paper" ){
        roundresult.innerText = ("You lose, paper beats rock");
        let newScore = Number(compScoreUI.innerText) + 1;
        compScoreUI.innerText = newScore;
        return computerScore = newScore;
    }
    else if (humanChoice == "rock" && computerChoice == "scissor" ){
        roundresult.innerText = ("You win!, rock beats scissor");
        let newScore = Number(humScoreUI.innerText) + 1;
        humScoreUI.innerText = newScore;
        return humanScore = newScore;
    }
    else if (humanChoice == "rock" && computerChoice == "rock" ){
        roundresult.innerText =("Draw... rock equals rock")
        return 0;
    }
    else if (humanChoice == "paper" && computerChoice == "rock" ){
       roundresult.innerText =("You win!, paper beats rock")
       let newScore = Number(humScoreUI.innerText) + 1;
        humScoreUI.innerText = newScore;
        return humanScore = newScore;
    }
    else if (humanChoice == "paper" && computerChoice == "paper" ){
       roundresult.innerText =("Draw... paper equals paper")
        return 0;
    }
    else if (humanChoice == "paper" && computerChoice == "scissor" ){
        roundresult.innerText =("You lose, scissor beats paper")
         let newScore = Number(compScoreUI.innerText) + 1;
        compScoreUI.innerText = newScore;
        return computerScore = newScore;
    }
    else if (humanChoice == "scissor" && computerChoice == "rock" ){
        roundresult.innerText =("You lose, rock beats scissor")
         let newScore = Number(compScoreUI.innerText) + 1;
        compScoreUI.innerText = newScore;
        return computerScore = newScore;
    }
    else if (humanChoice == "scissor" && computerChoice == "paper" ){
        roundresult.innerText =("You win!, scissor beats paper")
        let newScore = Number(humScoreUI.innerText) + 1;
        humScoreUI.innerText = newScore;
        return humanScore = newScore;
    }
    else if (humanChoice == "scissor" && computerChoice == "scissor" ){
        roundresult.innerText =("Draw... scissor equals scissor")
        return 0;
    }

}


function declareResult(human,computer){

    if(human + computer >= 5){
        
        
        if (human > computer){
        roundresult.innerText = ( "Congrats!! You Won!");
        }
        else if (human < computer){
        roundresult.innerText = ( "You lost, gg well played.");
        }
        else{
            roundresult.innerText = ( "It was a draw, better luck next time..");
        }

        humanScore = computerScore = 0;
        compScoreUI.innerText = humScoreUI.innerText = 0; 

    

}

    

}


choice.addEventListener("click", (e)=>{
const humanChoice = getHumanChoice(e);
const computerChoice = getComputerChoice();
playRound(computerChoice, humanChoice);
declareResult(humanScore,computerScore);
    
});






       

