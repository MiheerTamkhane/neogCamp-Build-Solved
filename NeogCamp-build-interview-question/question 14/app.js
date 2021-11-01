const input = document.querySelector('#input')
const button = document.querySelector('#button')
const output = document.querySelector('#output')

button.addEventListener('click', ()=>{
    let text = input.value.split("").reverse().join("");
    output.innerText = text
    input.value = '';
})