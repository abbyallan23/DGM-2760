document.getElementById('company').innerHTML = "Guessing Game"

document.querySelector('header > h2').innerText = "Loops"


let correctNumber = Math.floor(Math.random() * 15)

let guess = false
let totalGuesses = 0
let gamerGuess = 0
correctNumber += 1

function evalGuess(){
    totalGuesses += 1
    gamerGuess = document.querySelector('#guess').value
    const feedback = document.querySelector('#feedback')
}

if (gamerGuess == correctNumber) {
    feedback.innerText = 'Congrats, you win!'
} else if (gamerGuess > correctNumber && gamerGuess < 16) {
    feedback.innerText = 'too high, try again'
} else if (gamerGuess < correctNumber && gamerGuess > 0) {
    feedback.innerText = 'too low, try again'
} else {
    feedback.innerText = 'Please choose a number between 1 and 15 and try again'
}

document.querySelector('#attempts').innerText = totalGuesses