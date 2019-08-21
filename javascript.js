//GLOBAL VARIABLES
//---------------------
console.log("Javascript Loaded")

//CRYSTAL VARIABLES
//---------------------
const crystal = {
  blue:
  {
    name: "Blue",
    value: 0
  },

  green:
  {
    name: "Green",
    value: 0
  },

  pink:
  {
    name: "Pink",
    value: 0
  },

  purple:
  {
    name: "Purple",
    value: 0
  }
};



//SCORES (current and target)
//---------------------
var currentScore = 0;
var targetScore = 0;

//wins and losses
var winCount = 0;
var lossCount = 0;

//FUNCTIONS
//---------------------

//Math function for getting random numbers 
//---------------------
var getRandom = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Starts the game and restarts the game
//---------------------
var startGame = function () {

  //reset the current score
  //---------------------
  currentScore = 0;

  //set a new target score between 19 and 120
  //---------------------
  targetScore = getRandom(19, 120);

  //set a different values for each of the crystals (between 1 and 12)
  crystal.blue.value = getRandom(1, 12);
  crystal.pink.value = getRandom(1, 12);
  crystal.purple.value = getRandom(1, 12);
  crystal.green.value = getRandom(1, 12);

  //change the HTML to reflect all these changes
  //---------------------

  $("#yourScore").html(currentScore);
  $("#targetScore").html(targetScore);



  //Testing Console
  //---------------------
  console.log("____________")
  console.log("Target Score:  " + targetScore);
  console.log("Blue: " + crystal.blue.value + " | Green: " + crystal.green.value + " | Pink: " + crystal.pink.value + " | Purple: " + crystal.purple.value);
  console.log("____________")
}

//Respond to clicks on the crystals - gets the value and adds it to the current score
var addValues = function(crystal) {
  //change current score
  currentScore = currentScore + crystal.value;

  //change in the HTML
  $("#yourScore").html(currentScore);

  //call the checkForWin function
  checkForWin();

  //testing the console
  console.log("Your Score: " + currentScore);
}

//check if the user won or lost and reset the game
var checkForWin = function() {

  //check if currentScore is larger than targetScore
  if(currentScore > targetScore) {
    alert("Sorry, you lost!");
    console.log("you lost");
    // add to loss counter
    lossCount++;
    // change loss count HTML
    $("#lossCount").html(lossCount);

      //Restart the game
  startGame();
  }

  else if (currentScore == targetScore) {
    alert("Congratulations! You Won!");
    console.log("You Won!");
    //add win counter
    winCount++;
  //change in the HTML
  $("#winCount").html(winCount);

  //Restart the game
  startGame();

  }
}


//MAIN PROCESS
//---------------------

//starts the game the first time
startGame();

$("#pink").click(function() {
  addValues(crystal.pink);
});
$("#blue").click(function () {
  addValues(crystal.blue);
});
$("#purple").click(function () {
  addValues(crystal.purple);
});
$("#green").click(function () {
  addValues(crystal.green);
});

