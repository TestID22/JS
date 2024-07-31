console.log("test" + " " + "concatanation") // concatanation
var name = "VITALII"
let name1 = "Alex"
console.log("Hello " + name) // concatanation
console.log(name1)
// alert("allert message. very rare case")


let title = document.querySelector(".just_a_title")
title.style.textAlign = "center"

// logic. Find Eleement - change ellement 
let out_div = document.getElementById("out")
//Change - CSS styles 
// out_div.style.background = 'red';
out_div.style.border = "2px solid green"
out_div.style.textAlign = "center"

// query - find via CLASS 
let css_selector = document.querySelector(".header")
css_selector.style.textAlign = 'center'

//paragraph find via ID 
var text = document.querySelector('#text')
text.innerHTML = 'Variable'
text.style.textAlign = 'center'



// JS logic 
var reverse_me = "Alex the Terrible"
var reversed = ""

for (var i = reverse_me.length; i >= 0; i--) {
    reversed += reverse_me[i]
}

console.log(reversed)

let div = document.querySelectorAll('.div')
for (let i = 0; i < div.length; i++) {
    console.log(div[i])
    div[i].style.background = 'yellow';
    div[i].style.textAlign = 'center';
    div[i].onclick = two;
}

function two() {
    console.log("it Works")
}