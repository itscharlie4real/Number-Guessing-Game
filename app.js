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
  if (guess === isNaN || guess < min || guess > max) {
    setMessage(`Plase Enter a Number between ${min} and ${max}`);
  }
});

//setMessage
function setMessage(msg) {
  message.textContent = msg;
}
