// Creating variables
let order = [];         // Keep track of the order of the lights
let playerOrder = [];   // Order that player presses lights in
let flash;              // Number of flashes that have appeared in the game
let turn;               // Keep track of what turn the player is on
let correct;            // Whether the player has hit all the right colours
let compTurn;           // Whether it's the computer's or the player's turn
let intervalId;         // Setting a time interval between each flash
let win;                // If the player has won the game or not
let on;                 // Restricting the user from clicking when its the computer's turn
let score = 0;          // Keeping score
let time;

const startButton = document.querySelector("#start");
const highScore = document.querySelector("#highscore");
const progress = document.querySelector("#progress");

// Clicking start button
$( "#start" ).click(function() {                             // If start button is clicked
    if ($( "#status" ).css('background', 'red') || win)      // If status button is red or win = true
    {
        $( "#status" ).css('background', 'green');           // Change status button to green
        setTimeout(play, 3000);                              // Play the game 3 seconds after the light turns green
    }
    else 
    {
        highScore.innerHTML = "";                           // Otherwise, set highscore to blank
        progress.innerHTML = "";                            // Otherwise, set progress score to blank
        $( "#status" ).css('background', 'red');            // Otherwise, set status button to red
    } 
});

// Starting the game
function play() {
    win = false; 
    order = [];
    playerOrder = [];
    flash = 0;
    intervalId = 0;
    score = 0;
    turn = 1;
    correct = true;

    for (var i = 0; i < 15; i++)
    {
        order.push(Math.floor(Math.random() * 4) + 1); // Getting a random number between 1 and 4 and fill in the array
    }
    compTurn = true; // Start with computer flashing lights for player to match
    console.log(order);
    intervalId = setInterval(gameTurn, 800); // Running a function after an amount of milliseconds
}

// Checking if it is player's or computer's turn
function gameTurn() {
    on = false;

    if (flash == turn) // If the number of lights = the turn we're on  / Computer's turn is over
    {
        clearInterval(intervalId);
        compTurn = false;
        clearColour();
        on = true; // Player can now click the colours
        setTimer();
    }

    if (compTurn) { // If computer's turn is NOT over
        clearColour();
        setTimeout(flashing, 200);
    }
}

function setTimer() {
    time = setTimeout(loseGame, 5000); // Lose game after 5 seconds 
}

// Computer flashes colours
function flashing() {
    if (order[flash] == 1) greenFlash();    // If order[index] is 1, then run the function for green 
    if (order[flash] == 2) redFlash();      // If order[index] is 2, then run the function for red 
    if (order[flash] == 3) yellowFlash();   // If order[index] is 3, then run the function for yellow 
    if (order[flash] == 4) blueFlash();     // If order[index] is 4, then run the function for blue 
    flash++;
}

// Changing the colours on flash
function greenFlash() {
    $('#green').css('background', '#B1F3B1');
}
function redFlash() {
    $('#red').css('background', '#FF7F7F');
}
function yellowFlash() {
    $('#yellow').css('background', 'lightyellow');
}
function blueFlash() {
    $('#blue').css('background', 'lightblue');
}

// Clearing the lighter colours after flash
function clearColour() {
    $('#green').css('background-image', 'linear-gradient(rgb(148, 247, 148),limegreen)');
    $('#red').css('background-image', 'linear-gradient(rgb(250, 112, 112),red)');
    $('#yellow').css('background-image', 'linear-gradient(rgb(247, 247, 119),yellow)');
    $('#blue').css('background-image', 'linear-gradient(rgb(108, 108, 240),blue)');
}

// Flashing the lighter colours when player loses
function flashColour() {
    $('#green').css('background', '#B1F3B1');
    $('#red').css('background', '#FF7F7F');
    $('#yellow').css('background', 'lightyellow');
    $('#blue').css('background', 'lightblue');
    setTimeout(clearColour,300);
}

// Allowing the user to click the colour
$( "#green" ).click(function() {
    if (on) {
        clearTimeout(time);
        playerOrder.push(1); // Adding 1 (green) to the player order array
        check();             // Check if the player's move was correct
        greenFlash();
        if (!win) {
            setTimeout(clearColour, 300); // The colour that the user clicked is cleared after 300 milliseconds
        }
    }
});
$( "#red" ).click(function() {
    if (on) {
        clearTimeout(time);
        playerOrder.push(2); // Adding 2 (red) to the player order array
        check();             // Check if the player's move was correct
        redFlash();
        if (!win) {
            setTimeout(clearColour, 300); // The colour that the user clicked is cleared after 300 milliseconds
        }
    }
});
$( "#yellow" ).click(function() {
    if (on) {
        clearTimeout(time);
        playerOrder.push(3); // Adding 3 (yellow) to the player order array
        check();             // Check if the player's move was correct
        yellowFlash();
        if (!win) {
            setTimeout(clearColour, 300); // The colour that the user clicked is cleared after 300 milliseconds
        }
    }
});
$( "#blue" ).click(function() {
    if (on) {
        clearTimeout(time);
        playerOrder.push(4); // Adding 4 (blue) to the player order array
        check();             // Check if the player's move was correct
        blueFlash();
        if (!win) {
            setTimeout(clearColour, 300); // The colour that the user clicked is cleared after 300 milliseconds
        }
    }
});

// Updating the highscore if there is a new one
function highestScore(sc) { 
    let hs = document.querySelector("#highscore").textContent;
    if (sc > 0) {
        if (sc > hs)
        {
            document.querySelector("#highscore").innerHTML = sc;
        }
    }
}

// Checking if the player has lost or won the game yet
function check() { 
    if (playerOrder[playerOrder.length - 1] !== order[playerOrder.length - 1]) 
        correct = false; // If the player hits an incorrect colour

    if (playerOrder.length == 15 && correct == true) { // If player gets to round 20 and has no mistakes
        winGame();
    }

    if (correct == false) { // If the player makes a mistake
        loseGame();
    }

    if (turn == playerOrder.length && correct && !win) { // If the player is still playing the game
        turn++;
        score++;
        playerOrder = [];
        compTurn = true;
        flash = 0;
        progress.innerHTML = score; // Updating the score
        highestScore(score);        // Updating the highscore

        // Speeding up rounds
        if (turn < 6) {
            intervalId = setInterval(gameTurn, 800);
        }
        if (turn >= 6 && turn < 10) { // Speed up at turn 5
            intervalId = setInterval(gameTurn, 650);
        }
        if (turn >= 10 && turn < 14) { // Speed up at turn 9
            intervalId = setInterval(gameTurn, 450);
        }
        if (turn >= 14 && turn <= 15) { // Speed up at turn 13
            intervalId = setInterval(gameTurn, 350);
        }
    }
}

// Win condition
function winGame() {
    flashColour();
    on = false; // User can't click anything
    win = true; 
}

// Lose condition
function loseGame() {
    flashColour(); 
    console.log("first flash");
    
    setTimeout(flashColour, 400);
    console.log("second flash");
    
    setTimeout(flashColour, 800); 
    console.log("third flash");
    
    setTimeout(flashColour, 1200);
    console.log("fourth flash");
    
    setTimeout(flashColour, 1600); 
    console.log("fifth flash");
    
    progress.innerHTML = "0";            
    $( "#status" ).css('background', 'red'); 
}