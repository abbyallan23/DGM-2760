document.getElementById('company').innerHTML = "Inspector Clouseau"

document.querySelector('header > h2').innerText = "Cheif Inspector Clouseau Speaking on the Pheaun"

function reDisplay() {
let windowSizes = `Window Size is ${window.innerWidth} pixels wide by ${window.innerHeight} pixels tall.`
let offset = `Window offset is ${window.screenX} from the left edge and ${window.screenY} pixels from the top of the display`

let myWindow = document.querySelector('#myWindow').innerText = windowSizes + '\n' + offset
}
reDisplay()