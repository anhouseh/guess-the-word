const guessedLettersElement = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const letterGuess = document.querySelector(".letter-guess");
const progressWord = document.querySelector(".progress-word");
const remainingGuessesParagraph = document.querySelector(".remaining-guesses");
const remainingGuessesSpan = document.querySelector(".remaining span");
const message = document.querySelector(".message")
const playAgainButton = document.querySelector("play-again");

const word = "magnolia";
const guessedLetters = [];


const placeholder = function (word) {
    const placeholderLetters = [];
    for (const letter of word) {
        console.log(letter);
        placeholderLetters.push("●");
    }
    wordInProgress.innerText = placeholderLetters.join("");
};

placeholder(word);

guessButton.addEventListener("click", function (e) {
    e.preventDefault ();
    message.innerText = "";
    const valueInput = letterInput.value;
    const goodguess = validateInput(guess);

    if (goodGuess) {
        makeGuess(guess);

    }
    letterinput.value ="";
});

const validateInput = function (input) {
    const acceptedLetter = /[a-zA-Z]/ 
    if (input.length ===  0) = {
        message.innerText = "Please enter a letter.";
    } else if (input.length > 1) {
        message.innerText = "Please enter a single letter.";
    } else if (!input.match(acceptedLetter)) {
        message.innertext = "Please enter a letter from A to Z.";
    } else {
        return input;
    }
 };

 const makeGuess = function (guess) {
    guess = guess.toUpperCase();
    if (guessedLetters.includes(guess)) {
        message.innerText = "You already guessed that leter, silly. Try again";
    } else {
        guessedLetters.push(guess);
        console.log(guessedLetters);
    }
 };
