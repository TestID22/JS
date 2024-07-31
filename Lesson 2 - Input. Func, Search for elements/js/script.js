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