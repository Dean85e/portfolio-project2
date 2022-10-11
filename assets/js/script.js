// Wait for the Dom content to be loaded.
// Add Event listeners to the buttons.
document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByClassName("select");

    for(let button of buttons){
        button.addEventListener(click, function{
            let playerChoice = this.getAttribute("data-choice");
            runGame(playerChoice);
        })
    }

})

function runGame(){

}

function checkWinner(){

}

function incrementPlayerScore(){

}

function incrementComputerScore(){

}