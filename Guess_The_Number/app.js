let randomNumber = parseInt((Math.random()*500)+1);
const submit = document.querySelector('#user_guess');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const startOver = document.querySelector('.resultParas');
const lowOrHi = document.querySelector('.lowOrHi');
const p = document.createElement('p');

let previousGuesses = [];

let numGuesses = 1;
let playGame = true;

if (playGame){
    user_guess.addEventListener('click', function(e){
        e.preventDefault();
        
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}

function validateGuess(guess){
  
    if (isNaN(guess)){
        alert('Not a valid number');
    } else if (guess < 1) {
        alert('Enter number greater than 1');
    } else if (guess > 500){
        alert('Please enter a number less than 500')
    } else {
        
        previousGuesses.push(guess);
        
        if (numGuesses === 11){
            displayGuesses(guess);
            displayMessage(`Game Over! Number was ${randomNumber}`);
            endGame();
        } else {
        
        displayGuesses(guess);
        
        checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    
    if (guess === randomNumber){
        displayMessage('Great !! you guessed it right.');
        endGame();
    } else if (guess < randomNumber) {
        displayMessage("It's low, Try Again");
    } else if (guess > randomNumber) {
        displayMessage("It's high, Try Again");
    }
}

function displayGuesses(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess}  `;
    numGuesses++
    remaining.innerHTML = `${11 - numGuesses}  `;
}

function displayMessage(message){
        lowOrHi.innerHTML = `<h1>${message}</h1>`
}

function endGame(){
    
    userInput.value = '';
    
    userInput.setAttribute('disabled', '');
    
    submit.setAttribute('disabled', '');
    
          p.classList.add('button');
          p.innerHTML = `<h1 id="newGame">PLAY AGAIN</h1>`
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){

    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(){
        
        randomNumber = parseInt((Math.random()*500)+1);
        previousGuesses = [];
        numGuesses = 1;
        guessSlot.innerHTML = '';
        lowOrHi.innerHTML = '';
        remaining.innerHTML = `${11 - numGuesses}  `;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
        location.reload();
    })
}

  