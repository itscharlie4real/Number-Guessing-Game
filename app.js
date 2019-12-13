// Game Function and Rules
// -Player must guess a number between a min and a max
// -Player gets a certain amount of guesses
// -Game notifies the player of the guesses remaining
// -Game notifies the player of the correct answer if they loose
// -Game lets the player choose to play again

//Game Values
let min = 1,
  max = 10,
  winningNum = 2,
  guessesLeft = 3;

//UI Elements
const game = document.querySelector("#game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessBtn = document.querySelector("#guess-btn"),
  guessInput = document.querySelector("#guess-input"),
  message = document.querySelector(".message");

//Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

//Listen for guess
guessBtn.addEventListener("click", function() {
  let guess = parseInt(guessInput.value);

  //validate input
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Plase Enter a Number between ${min} and ${max}`, "red");
  }

  //Check for winning number
  if (guess === winningNum) {
    // //Won- Game over
    // // Disable input
    // guessInput.disabled = true;
    // //Change border to green
    // guessInput.style.borderColor = "green";
    // //Let user know they won
    // setMessage(`Good Guess,  ${winningNum} Is Correct, YOU WON!`, "green");
  } else {
    //Wrong Number
    guessesLeft = guessesLeft - 1;
    if (guessesLeft === 0) {
      // Gameover- lost
      // Disable input
      guessInput.disabled = true;

      //Change border to red
      guessInput.style.borderColor = "red";

      //Let user know they won
      setMessage(
        `Game over you are out of guesses, the correct number was ${winningNum}`,
        "red"
      );
    } else {
      //Change border to red
      guessInput.style.borderColor = "red";

      //Clear Input
      guessInput.value = "";

      // Notify users of guesses left
      setMessage(
        `${guess} is not correct, You have ${guessesLeft} guesse(s) left`,
        "red"
      );
    }
  }
});

//Game Over
function gameOver(won, msg) {
  // Disable input
  guessInput.disabled = true;

  //Change border to green
  guessInput.style.borderColor = "green";

  //Let user know they won
  setMessage(`Good Guess,  ${winningNum} Is Correct, YOU WON!`, "green");
}

//setMessage
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}
