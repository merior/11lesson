const button = document.getElementById('btn');
const square = document.getElementById('square');
const inputText = document.querySelector('[type="text"]')
const inputRange = document.querySelector('[type="range"]')
const e_button = document.getElementById('e_btn')
const circle = document.getElementById('circle')


button.addEventListener('click', function() {
    square.style.backgroundColor = inputText.value
});

const displayNone = function() {
    e_button.style.display = 'none'
} 

inputRange.addEventListener('input', function(event) {
    circle.style.width = inputRange.value
});