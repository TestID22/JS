console.log("test" + " " + "concatanation") // concatanation
var name = "VITALII"
let name1 = "Alex"
console.log("Hello " + name) // concatanation
console.log(name1)
// alert("allert message. very rare case")

// logic. Find Eleement - change ellement 
var out_div = document.getElementById("out").innerHTML = "Hello"
var out_div = document.getElementById("out").innerHTML = "<b>a bit bold Hello</b>"


document.querySelector("h2.header").innerHTML = 'viaHeader'
// query - find via CLASS 
document.querySelector(".header").innerHTML = 'CSS Selector'

//paragraph find via ID 
var text = document.querySelector('#text')
text.innerHTML = 'Variable'
