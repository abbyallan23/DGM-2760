document.getElementById('company').innerHTML = "Guessing Game"

document.querySelector('header > h2').innerText = "Loops"


let correctNumber = Math.floor(Math.random() * 15 + 1 )
console.log(`The correctNumber is ${correctNumber}`)

let guessed = false
let totalGuesses = 0
let gamerGuess = 0
//correctNumber += 1

function evalGuess(){
    totalGuesses += 1
    gamerGuess = document.querySelector('#guess').value

    console.log(totalGuesses, gamerGuess)
    const feedback = document.querySelector('#feedback')

if (gamerGuess == correctNumber) {
    console.log(`gamerGuess is equal to correctNumber`)
    feedback.innerText = 'Congrats, you win!'
    giveAward()
} else if (gamerGuess > correctNumber && gamerGuess < 16) {
    feedback.innerText = 'too high, try again'
} else if (gamerGuess < correctNumber && gamerGuess > 0) {
    feedback.innerText = 'too low, try again'
} else {
    feedback.innerText = 'Please choose a number between 1 and 15 and try again'
    totalGuesses -= 1
}

document.querySelector('#attempts').innerText = totalGuesses
}

function giveAward() {
    console.log('Congratulations!')
    let imagePath = '#'
    switch(totalGuesses) {
        case 1:
        case 2:
        case 3:
            imagePath = 'images/firstPlaceRibbon copy.jpg'
            break;
        case 4:
        case 5:
        case 6:
            imagePath = 'images/secondPlaceRibbon copy.jpg'
            break;
            default:
                imagePath = 'images/youTriedRibbon copy.jpg'
 }

 const awardImage = document.createElement('img') //Creates an 'img'
    awardImage.setAttribute('src', imagePath)


    const ribbon = document.querySelector('#ribbon')

    ribbon.appendChild(awardImage)

    document.getElementById('buttonId').setAttribute("disabled", "disabled");

    // only append child if the ribbon element does not have any child nodes yet 
}
