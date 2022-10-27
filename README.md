 # Rock Paper Scissors Game
 Link to the live website can be found here [Rock Paper Scissors](https://dean85e.github.io/portfolio-project2/)
 
 Welcome to Rock, Paper, Scissors. This is a hand game, in which each player simultaneously forms one of three shapes with an outstreched hand. These shapes include 'Rock', 'Paper', 'Scissors'. Rock beats Scissors, Paper beats Rock, Scissors beats Paper.

 This game has been designed to be fully responsive on all devices

 ![Am I Responsive](/assets/images/responsive-screenshot.png)

 ## Live Site 

 [Rock Paper Scissors](https://dean85e.github.io/portfolio-project2/)

 ## Repository 

 https://github.com/Dean85e/portfolio-project2

 ## UX: User Experience

 ### User Stories 

 As a user i want to be able to:

 * Have a clear understanding of the interactivity of the game.
 * Have a clear understanding of the rules of the game.
 * Have a clear understanding of the scoring rounds.
 * To be informed of the results of the game.

 ## Fonts & colors 

 * The font used in this game throughout is "Permanent Marker" I felt this font gave the game a more attractive look. The fall back option is "Sans-Serif".
 * The main color for this game is : HEX color #808080 Name: Grey.

 ### Wireframe

 ![wireframe](/assets/images/wire-frame.png)

 ## Features 

 ### Rules

 * Upon loading the user is prompted with a popup message which states the rules of the game and that the game is the first player to reach ten wins, The user must click play to begin.

 * The popup message is in a color that contrasts with the background.

 ![Rules](/assets/images/popup-screenshot.png)

### Heading

 * At the top of the page is the name of the game and some instruction for the user.

 * The color of the header section contrasts well with the header text.

 ![Header](/assets/images/header-screenshot.png)

 ### Game Buttons

 * Located just under the header is the game selection emoji's which grow in size in desktop form when hovered on and also have a curser pointer.

 * In touch devices these emoji's grow when selected. 

 * When an emoji is selected by the user it will display in the "Game Area",
 the computers randomly generated selection will also appear as an emoji to clearly demonstrate to the user each players selection. 

  ![Emoji's](/assets/images/emoji-screenshot.png)

  ### Restart Game

  * The game area has a Restart Game button in which can be used to restart the game at any time, The button styling matches that of the rest of the game.

  ![Restart Game](/assets/images/restart-game.png)

### Game Area
 
 * The game area consists of two panels side by side within these panels is a display of the game information such as choices that have been made, updates the score each time a round has been won and lets the user know the result of each round, both panels will display "Ready" until the user makes a choice.


  ![Ready Game Area](/assets/images/ready-game-area.png)
  ![In Play Game Area](/assets/images/inplay-game-area.png)

### End Game

* When either player reaches ten a pop up message will appear displaying each players score, which player has won and a message to the user which will be different depending on the score of the game, there is three possible winning messages and also three possible loosing messages which makes for a good UX.

* The user must then click the "OK" button to proceed to start a new game in which the popup will change to the game rules where the user will have to click play to begin and the game area will default to "Ready".


 ![End Game Message](/assets/images/end-game-message.png)

 ### Features left to Implement 

 * I would like to add a best of five rounds feature which would track and display each players rounds won when there is time to do so.

 * I would also like to add the lizard and spock options.

 ## Testing

 * I can confirm this game is responsive, looks good and functions on all standard screen sizes using dev tools device toolbar.

 * I have tested that this game works in different browsers such as : Chrome, Edge, Safari, Firefox.
 
 * I can confirm that the game results are always correct.

 * I can confirm that the header, instructions, options and game area text are all readable and easy to understand.

 * I can confirm the pop up which displays the rules of the game is readable and easy to understand.

 * I can confirm the pop up which displays the end result and message to the user is readable and easy to understand.

 * I can confirm that the colors and fonts chosen are easy to read and accessible by running it through lighthouse in devtools.

![Lighthouse report](/assets/images/lighthouse-screenshot.png)

### validator testing 

* HTML 
   * No errors were found when passed through the official W3C HTML validator.

   ![html validator](/assets/images/html-validator.png)

* CSS
   * No errors were found when passed through the official W3C CSS validator.

 ![css validator](/assets/images/css-validator.png)


* JS 
   * some errors were found when passed through the official JSHint validator.
   * These errors were made up of missing semi-colons, I went back through my code and added the missing semi-colons, This fixed the issue.
   
![js validator](/assets/images/js-validator.png)

## Bugs

### Solved Bugs 

* When i created the popup for the rules which has the play button, Upon page load this popup displays but when the user had to click the play button to start the game, on the first click it would run the game behind the pop up, on second click it would behave as normal which is to close the popup
and set the game text to "Ready".  I suspected this was because of the tag name 'Button'. 

* To fix this bug I put an 'if' statement within the for loop to only add event listeners for the run game function for buttons with the class of "select". 

### Unsolved bugs 

* No unsolved bugs.

### Deployment

* This site was deployed to git hub pages the steps are as follows:

* In the github repository navigate to the settings tab.

* Select pages in the drop-down menu.

* In build and deployment select main then save

* The page then provided a link to the completed website.

### To Fork The Repository
  * To make a copy or 'fork' the repository:
  
  * Log into GitHub and locate repository.
  * On the right hand side of the page select the 'fork' option to create a copy of the original.
 
 ### To Create A Local Clone
   * Under the repository name, click on the code tab.
   * In the clone box, HTTPS tab, click ont the clipboard icon.
   * In your IED open GitBash.
   * Change the current working directory to the location you want the cloned directory to be made
   * Type 'git clone' and then paste the url copied from GitHub.
   * Press enter and the local clone will be created.

   ## Credits
  
  * Some inspiration for the emoji buttons was taken from this [Youtube Tutorial](https://youtu.be/1yS-JV4fWqY)

  * Some inspiration for the popup was taken from this this [Youtube Tutorial](https://youtu.be/AF6vGYIyV8M)

  * Throughout the building process I found many helpful threads online such as : 
     *  [Stack Overflow](https://stackoverflow.com)
     *  [W3Schools](https://www.w3schools.com/)

   ## Media
  * The font used in this project was taken from [Google fonts](https://fonts.google.com)

  * The favicon image was taken from [Vecteezy](https://www.vecteezy.com/vector-art/690876-rock-paper-scissors-vector-design
)

* The emoji's used in this project were taken from [Here](https://emojidb.org/rock%E2%80%93paper%E2%80%93scissors-emojis)

   ## Languages Used 

   * HTML 5
   * CSS 3
   * Javascript ES6

 


