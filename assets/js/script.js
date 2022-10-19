 //    Declaring variables with global scope.         
 let playerScore = 0;
 let computerScore = 0;


    

 // Wait for the Dom content to be loaded.
 // Add Event listeners to the buttons.
 document.addEventListener("DOMContentLoaded", function () {
     let buttons = document.getElementsByTagName("button");

     // Loop through the buttons and listen for click selection.
     for (let button of buttons) {
         button.addEventListener("click", function () {
             let playerChoice = this.getAttribute("data-choice");
             let reset = document.getElementById("restart");
             reset.addEventListener("click", restartGame);
 
             runGame(playerChoice);
            
             
         })
         
         
    }

 })
 // Running game.
 function runGame(playerChoice) {

     console.log(playerChoice);
     compChoice = computerChoice();
     console.log(compChoice);
     checkWinner(playerChoice, compChoice);
     document.getElementById("your-emoji").innerHTML = playerChoice;
     document.getElementById("computer-emoji").innerHTML = compChoice;
    
     if(playerScore >= 10 || computerScore >= 10){
        gameOver(playerScore, computerScore);
        
     }
    
 }

 function computerChoice() { // Random selection for computer choice.

     let compChoice = Math.floor(Math.random() * 3);
    

     switch (compChoice) {
         case 0:
             return "Rock";
             break;
         case 1:
             return "Scissors";
             break;
         case 2:
             return "Paper";
             break;
        
         }
         
     }
     
      
 
 // Determine if player has won or computer has won.

 function checkWinner(playerChoice, computerChoice) {

     if (playerChoice === computerChoice) {

         document.getElementById("your-choice").innerHTML = "Draw!";
         document.getElementById("computer-choice").innerHTML = "Draw!";
         return;
     }

     switch (playerChoice) {
         case "Rock":
             if (computerChoice === "Paper") {
                 console.log("Computer is Winner");
                 document.getElementById("your-choice").innerHTML = null;
                 document.getElementById("computer-choice").innerHTML = "Paper Wins!";
                 incrementComputerScore();
             } else {
                 console.log("Computer is Loser");
                 incrementPlayerScore();
                 document.getElementById("your-choice").innerHTML = "Rock Wins!";
                 document.getElementById("computer-choice").innerHTML = null;
             }
             break;

         case "Paper":
             if (computerChoice === "Scissors") {
                 console.log("Computer is Winner");
                 document.getElementById("your-choice").innerHTML = null;
                 document.getElementById("computer-choice").innerHTML = "Scissors Wins!";
                 incrementComputerScore();
             } else {
                 console.log("Computer is Loser");
                 incrementPlayerScore();
                 document.getElementById("your-choice").innerHTML = "Paper Wins!";
                 document.getElementById("computer-choice").innerHTML = null;

             }
             break;
         case "Scissors":
             if (computerChoice === "Rock") {
                 console.log("Computer is Winner");
                 document.getElementById("your-choice").innerHTML = null;
                 document.getElementById("computer-choice").innerHTML = "Rock Wins!";
                 incrementComputerScore();
             } else {
                 console.log("Computer is Loser");
                 incrementPlayerScore();
                 document.getElementById("your-choice").innerHTML = "Scissors Wins!";
                 document.getElementById("computer-choice").innerHTML = null;
             }
            

     }
    
    
 }
 // Increment player score & user Score .
 function incrementPlayerScore() {
     ++playerScore;
     document.getElementById("player-score").innerHTML = "Player: " + playerScore;


 }

 function incrementComputerScore() {
     ++computerScore;
     document.getElementById("computer-score").innerHTML = "Computer: " + computerScore;



 }

 

                           // Restart the game.
 function restartGame() {
     playerScore = 0;
     computerScore = 0;

     document.getElementById("player-score").innerHTML = "Player: 0";
     document.getElementById("computer-score").innerHTML = "Computer: 0";

     document.getElementById("your-choice").innerHTML = " ";
     document.getElementById("computer-choice").innerHTML = " ";
    
     document.getElementById("your-emoji").innerHTML = "Ready !";
     document.getElementById("computer-emoji").innerHTML = "Ready !";
     
     
 }

 function gameOver(buttons){
    console.log("game over check");
    document.getElementById("your-emoji").innerHTML = " ";
    document.getElementById("computer-emoji").innerHTML = " ";
    
    if(playerScore === 10){
        document.getElementById("your-choice").innerHTML = "PLAYER WINS ! ";
        document.getElementById("computer-choice").innerHTML = " ";
       
    }else if(computerScore === 10){
        document.getElementById("your-choice").innerHTML = " ";
        document.getElementById("computer-choice").innerHTML = "COMPUTER WINS !";
        
    }
    if(playerScore  === 10 || computerScore === 10){
         
        buttons = restartGame();
        
    }
 }
 