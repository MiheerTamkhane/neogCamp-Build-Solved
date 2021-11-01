const input =document.querySelector('#input')
const addText =document.querySelector('#addText')
const red = document.querySelector('#red')
const blue = document.querySelector('#blue')
const green = document.querySelector('#green');
const output = document.querySelector('#output')

addText.addEventListener('click', ()=>{
    let textInput = input.value;
    output.innerHTML = textInput;
})
red.addEventListener('click', () =>{
    output.style.color = 'red'
})
green.addEventListener('click', () =>{
    output.style.color = 'green'
})
blue.addEventListener('click', () =>{
    output.style.color = 'blue'
})