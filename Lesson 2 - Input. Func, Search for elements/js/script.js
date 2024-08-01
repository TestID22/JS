let title = document.querySelector('.title')
console.log(title)
title.style.textAlign = 'center'


// elements
let input = document.querySelector('.input_in')
let output = document.querySelector('.output')

// lambda?
document.querySelector('#ok').onclick = () => {
    output.innerHTML = input.value
    input.value = ''
}


// shift title in the button
document.querySelector('.shifter_btn').onclick = shift;
let shift_btn = document.querySelector('.shifter_btn')
const allign = ['center', 'left', 'right']
const colours = ['cyan', 'green', 'yellow', 'blue', 'red']

function shift() {
    shift_btn.style.textAlign = getRandomElement(allign)
    shift_btn.style.background = getRandomColor(colours)
}

function getRandomElement(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}
function getRandomColor(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length)
    return arr[randomIndex]
}