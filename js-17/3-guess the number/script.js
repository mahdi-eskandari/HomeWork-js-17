// let randomNumber = Math.floor(Math.random() * 100 + 1);

// function guessNumber() {
//   //Collect input from the user
//   let guess = document.querySelector('.inputs-Values').value;

//   //If the user inputs a bad input ie 0, empty string, number greater that 100, number less than zero Print "Please enter a number between 1 and 100"

//   //If the users guess is higher than the random number print Number is too high, try again (hint use .final-out class to print)

//   //If the users guess is lower than the random number print Number is too low, try again  (hint use .final-out class to print)

//   //If the user has guessed the random number correctly print out the randomNumber with a message "Guess is correct. You win!"
// }

// // For this task we will be making a "New Game" button function which will reset our game,
// // Once the user clicks on this button the user will have new random number to guess
// // 1. Reset the values inside the body of the function
// // 2. Attach our new game button using an event listener to the .btnNewGame button
// function newGame() {
//   //Your code here
//   //Reset randomNumber
//   //Reset users input field
//   //Reset tries, and triesTaken by the user
// }

// document.querySelector('.btnGuess').addEventListener('click', guessNumber);




const newGameButton = document.querySelector('.btnNewGame');
const inputField = document.querySelector('.inputs-Values');
const guessButton = document.querySelector('.btnGuess');
const triesOutput = document.querySelector('.Tries-output');
const finalOutput = document.querySelector('.final-output');


let randomNumber = Math.floor(Math.random() * 100 + 1)


function newGame() {
    randomNumber = Math.floor(Math.random() * 100 + 1);
    tries = 0
    inputField.value = ""
    triesOutput.textContent = ""
    finalOutput.textContent = "Guess a number between 1 and 100"
    guessFun()
}

let tries = 0
let max = 10
function guessFun() {
    const guess = parseInt(inputField.value);
    tries++
    inputField.value = ''

    /*  conditions  */
  if (guess < 1 || guess > 100) {
    finalOutput.textContent = "Please enter a number between 1 and 100"
    }
    if (guess === randomNumber) {
        finalOutput.textContent = "you won"
        return
    }
    else if (guess > randomNumber) {
        finalOutput.textContent = "Too many. Try again."
    }
    else if (guess < randomNumber) {
        finalOutput.textContent = "There are few. Try again."
    }


    if (tries >= max) {
        triesOutput.textContent = "You lost the game."
        return
    }



    triesOutput.textContent = `Tries: ${tries}`
}
guessButton.addEventListener("click", () => {
    guessFun()
})

newGameButton.addEventListener("click", () => {
    newGame()
})