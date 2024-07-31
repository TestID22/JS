document.addEventListener('DOMContentLoaded', function () {
  var registrationButton = document.getElementById('registrationButton');
  var registrationForm = document.getElementById('registrationForm');

  registrationButton.addEventListener('click', function () {
    registrationForm.classList.toggle('hidden');
  });
});

function fallLetters() {
  var letters = document.querySelectorAll("#letterContainer span");

  letters.forEach(function (letter, index) {

    setTimeout(function () {
      letter.style.transform = "translateY(1400px)";
      letter.style.color = "orange";
    }, index * 100);
  });
}

function returnLettersback() {
  var letters = document.querySelectorAll("#letterContainer span");

  letters.forEach(function (letter, index) {

    setTimeout(function () {
      letter.style.transform = "translateY(0px)";
      letter.style.color = "cyan";
    }, index * 100);
  });
}


let vitalii = document.querySelector("#letterContainer")
vitalii.onclick = returnLettersback;


//search for elements
let ok_button = document.querySelector(".ok");
let input = document.querySelector(".input_in")
let output = document.querySelector(".output")
//func
ok_button.onclick = function () {
  output.innerHTML = "<p>" + input.value
}