 //    Declaring variables with global scope.         
let playerScore = 0;
let computerScore = 0;


// Wait for the Dom content to be loaded.
// Add Event listeners to the buttons.
document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");
                                                     
                                                // Loop through the buttons and listen for click selection.
    for(let button of buttons){
        button.addEventListener("click", function()
        {
           let playerChoice = this.getAttribute("data-choice");
            
                runGame(playerChoice);
            
            
        })
         
    }
    
})
                                   // Running game.
function runGame(playerChoice){
         
    console.log(playerChoice);
    let compChoice = computerChoice();
    console.log(compChoice); 
    checkWinner(playerChoice, compChoice);
     
}

function computerChoice(){       // Random selection for computer choice.
                                  
    let compChoice = Math.floor(Math.random()*3);
       
    switch(compChoice) {
        case 0:
          return "Rock";
          break;
        case 1:
          return "Scissors";
          break;
        default:
          return "Paper"
      }
      
}                                                  
                                    // Determine if player has won or computer has won.

function checkWinner(playerChoice, computerChoice){
    
    if(playerChoice === computerChoice){
        return;
    }
    switch(playerChoice) {
        case "Rock":
        if(computerChoice === "Paper"){
            console.log("Computer is Winner");
            incrementComputerScore();
        }else{
            console.log("Computer is Loser");
            incrementPlayerScore();
        }
          break;
        case "Paper":
            if(computerChoice === "Scissors"){
                console.log("Computer is Winner");
                incrementComputerScore();
            }else{
                console.log("Computer is Loser");
                incrementPlayerScore();
            }
          break;
        case "Scissors":
            if(computerChoice === "Rock"){
                console.log("Computer is Winner");
                incrementComputerScore();
            }else{
                console.log("Computer is Loser");
                incrementPlayerScore();
            }
        
          
      }
}
                                    // Increment player score & user Score .
function incrementPlayerScore(){
     ++ playerScore;
    document.getElementById("player-score").innerHTML = "Player: " + playerScore;
  

}

function incrementComputerScore(){
    ++ computerScore;
    document.getElementById("computer-score").innerHTML ="Computer: " + computerScore;
}