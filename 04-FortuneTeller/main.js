document.getElementById('company').innerHTML = "Fortune Teller"

document.querySelector('header > h2').innerText = "Switch Statements"

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let month = getRandomIntInclusive(1, 12)
let fate = getRandomIntInclusive(1, 10)
let day = getRandomIntInclusive(1, 30)
let year = getRandomIntInclusive(2021, 2040)
const monthName = getMonthName(month)


function getMonthName(month) {
    let name 
    switch (month) {
        case 1:
            name = "January"
            break
        case 2:
            name = "February"
            break
        case 3:
            name = "March"
            break
        case 4:
            name = "April"
            break
        case 5:
                name = "May"
                break
        case 6:
                name = "June"
                break
        case 7:
                name = "July"
                break
        case 8:
                name = "August"
                break
        case 9:
                name = "September"
                break
        case 10:
                name = "October"
                break
        case 11:
                name = "November"
                break
        case 12:
                name = "December"
                break
        default:
            name = "not a month"
            break
    }

return name
}


function getFortune(fate) {
    let message
    switch (fate) {
        case 1:
            message = "win a tesla from David Dobrik"
            break
        case 2:
            message = "suddenly go color blind"
            break
        case 3:
            message = "get hit by a car and wake up only being able to speak French"
            break
        case 4:
            message = "get twitter famous for roasting Bill Gates"
            break
        case 5:
            message = "collab with Justin Bieber on his next greatest hit"
            break
        case 6: 
            message = "trip on your shoe lace and knock out your front teeth"
            break
        case 7:
            message = "direct an animated movie about your life story"
            break
        case 8:
            message = "you discover your secret talent is opera singing"
            break
        case 9:
            message = "uncover something from your past that will change your entire perception of life"
            break
        case 10:
            message = "be in the wrong place at the wrong time"
            break
        default:
            message = "an error occured, try again"
            break;
    }
    return message
}


const fortuneRevealed = `On ${monthName} ${day}, ${year} you will ` + getFortune(fate)

document.querySelector('#fortune').innerText = fortuneRevealed