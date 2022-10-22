 //    Declaring variables with global scope.         
 let playerScore = 0;
 let computerScore = 0;
 let popup = document.getElementById("popup-window");
 let rules = document.getElementById("rules");
 const emoji = ["✊", "🖐️", "✌️"];
openRules();
let startGame = document.getElementById("start-game");

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

         });
        

     }

 });
 // Running game.
 function runGame(playerChoice, compChoice) {

   
    startGame.addEventListener("click",  closeRules, restartGame);
    

     compChoice = computerChoice();
     checkWinner(playerChoice, compChoice);
     if (playerChoice === "Rock") {
         playerChoice = emoji[0];
     }
     if (playerChoice === "Paper") {
         playerChoice = emoji[1];
     }
     if (playerChoice === "Scissors") {
         playerChoice = emoji[2];
     }
     if (compChoice === "Rock") {
         compChoice = emoji[0];
     }
     if (compChoice === "Paper") {
         compChoice = emoji[1];
     }
     if (compChoice === "Scissors") {
         compChoice = emoji[2];
     }
     document.getElementById("your-emoji").innerHTML = playerChoice;
     document.getElementById("computer-emoji").innerHTML = compChoice;

     if (playerScore >= 10 || computerScore >= 10) {
         openPopup();
     }
    

     let removePopup = document.getElementById("close-popup");
     removePopup.addEventListener("click", closePopup);
     removePopup.addEventListener("click", restartGame);

     if (playerScore >= 10) {
         document.getElementById("result").innerHTML = "Player Wins!";
         document.getElementById("endinfo").innerHTML = "Player:" + playerScore + " " + " Computer:" + computerScore;
     } else if (computerScore >= 10) {
         document.getElementById("result").innerHTML = "Computer Wins!";
         document.getElementById("endinfo").innerHTML = "Player:" + playerScore + " " + " Computer:" + computerScore;
     }
     if (playerScore == 10 && computerScore > 7) {
         document.getElementById("message").innerHTML = "Close call but victory is yours!";
     } else if (computerScore == 10 && playerScore > 7) {
         document.getElementById("message").innerHTML = "Close game better luck next time!";
     } else if (playerScore == 10 && computerScore < 4) {
         document.getElementById("message").innerHTML = "Fantastic work complete Annihilation!";
     } else if (playerScore < 4 && computerScore == 10) {
         document.getElementById("message").innerHTML = "You just got schooled!";
     } else if (playerScore == 10 && computerScore >= 4 <= 7) {
         document.getElementById("message").innerHTML = "Easy work, Try again";
     } else if (playerScore >= 4 <= 7 && computerScore == 10) {
         document.getElementById("message").innerHTML = "Unlucky, Try again";
     }


 }

 function computerChoice() { // Random selection for computer choice.

     let compChoice = Math.floor(Math.random() * 3);


     switch (compChoice) {
         case 0:
             return "Rock";

             
         case 1:
             return "Scissors";
             
         case 2:
             return "Paper";
             

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
                 document.getElementById("your-choice").innerHTML = null;
                 document.getElementById("computer-choice").innerHTML = "Paper Wins!";
                 incrementComputerScore();
             } else {
                 document.getElementById("your-choice").innerHTML = "Rock Wins!";
                 document.getElementById("computer-choice").innerHTML = null;
                 incrementPlayerScore();
             }
             break;

         case "Paper":
             if (computerChoice === "Scissors") {
                 document.getElementById("your-choice").innerHTML = null;
                 document.getElementById("computer-choice").innerHTML = "Scissors Wins!";
                 incrementComputerScore();
             } else {
                 incrementPlayerScore();
                 document.getElementById("your-choice").innerHTML = "Paper Wins!";
                 document.getElementById("computer-choice").innerHTML = null;
             }
             break;
         case "Scissors":
             if (computerChoice === "Rock") {
                 document.getElementById("your-choice").innerHTML = null;
                 document.getElementById("computer-choice").innerHTML = "Rock Wins!";
                 incrementComputerScore();
             } else {
                 document.getElementById("your-choice").innerHTML = "Scissors Wins!";
                 document.getElementById("computer-choice").innerHTML = null;
                 incrementPlayerScore();
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

 function restartGame() { // Restart the game
     playerScore = 0;
     computerScore = 0;

     document.getElementById("player-score").innerHTML = "Player: 0";
     document.getElementById("computer-score").innerHTML = "Computer: 0";

     document.getElementById("your-choice").innerHTML = " ";
     document.getElementById("computer-choice").innerHTML = " ";

     document.getElementById("your-emoji").innerHTML = "Ready";
     document.getElementById("computer-emoji").innerHTML = "Ready";


 }

 function openRules() {
     rules.classList.add("rule-text-popup");
    restartGame();
 }

 function closeRules() {
     rules.classList.remove("rule-text-popup");
     restartGame();
 }


 function openPopup(playerScore, computerScore) {

     popup.classList.add("open-popup");
 }

 function closePopup() {
     popup.classList.remove("open-popup");
     openRules();
 }