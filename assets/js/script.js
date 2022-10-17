 //    Declaring variables with global scope.         
 let playerScore = 0;
 let computerScore = 0;
 let reset = document.getElementById("restart");
 reset.addEventListener("click", restartGame);

 // Wait for the Dom content to be loaded.
 // Add Event listeners to the buttons.
 document.addEventListener("DOMContentLoaded", function () {
     let buttons = document.getElementsByTagName("button");

     // Loop through the buttons and listen for click selection.
     for (let button of buttons) {
         button.addEventListener("click", function () {
             let playerChoice = this.getAttribute("data-choice");

             runGame(playerChoice);



         })


     }

 })
 // Running game.
 function runGame(playerChoice) {

     console.log(playerChoice);
     let compChoice = computerChoice();
     console.log(compChoice);
     checkWinner(playerChoice, compChoice);


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
                 document.getElementById("your-choice").innerHTML = "looser!";
                 document.getElementById("computer-choice").innerHTML = "Winner!";
                 incrementComputerScore();
             } else {
                 console.log("Computer is Loser");
                 incrementPlayerScore();
                 document.getElementById("your-choice").innerHTML = "Winner!";
                 document.getElementById("computer-choice").innerHTML = "Looser!";
             }
             break;

         case "Paper":
             if (computerChoice === "Scissors") {
                 console.log("Computer is Winner");
                 document.getElementById("your-choice").innerHTML = "looser!";
                 document.getElementById("computer-choice").innerHTML = "Winner!";
                 incrementComputerScore();
             } else {
                 console.log("Computer is Loser");
                 incrementPlayerScore();
                 document.getElementById("your-choice").innerHTML = "Winner!";
                 document.getElementById("computer-choice").innerHTML = "Looser!";

             }
             break;
         case "Scissors":
             if (computerChoice === "Rock") {
                 console.log("Computer is Winner");
                 document.getElementById("your-choice").innerHTML = "looser!";
                 document.getElementById("computer-choice").innerHTML = "Winner!";
                 incrementComputerScore();
             } else {
                 console.log("Computer is Loser");
                 incrementPlayerScore();
                 document.getElementById("your-choice").innerHTML = "Winner!";
                 document.getElementById("computer-choice").innerHTML = "Looser!";
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

 }