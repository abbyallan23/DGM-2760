document.getElementById('company').innerHTML = "Inspector Clouseau"

document.querySelector('header > h2').innerText = ""

let userName = prompt("What is your name?")

//let message = "Hello " + userName + ", welcome to the best lodging in Utah!"

let message = `Hello ${userName}, `

document.querySelector('#greeting').innerText = message