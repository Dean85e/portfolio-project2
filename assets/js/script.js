             
             
    const choices = ["✊", "🖐️", "✌️"];


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

function checkWinner(playerChoice, computerChoice){
    
    if(playerChoice === computerChoice){
        return;
    }
    switch(playerChoice) {
        case "Rock":
        if(computerChoice === "Paper"){
            console.log("Computer is Winner");
        }else{
            console.log("Computer is Loser");
        }
          break;
        case "Paper":
            if(computerChoice === "Scissors"){
                console.log("Computer is Winner");
            }else{
                console.log("Computer is Loser");
            }
          break;
        case "Scissors":
            if(computerChoice === "Rock"){
                console.log("Computer is Winner");
            }else{
                console.log("Computer is Loser");
            }
        
          
      }
}

function incrementPlayerScore(){

}

function incrementComputerScore(){

}