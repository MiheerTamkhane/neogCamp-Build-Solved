const input = document.querySelector('#input');
const maxPx = document.querySelector('#btn-one');
const minPx = document.querySelector('#btn-two');
const output = document.querySelector('#output');
const add = document.querySelector('#add')

let pixel = 18;

add.addEventListener('click', () =>{
    
    let textInput = input.value ;
    console.log(textInput);
    output.innerText = textInput;
});

maxPx.addEventListener('click', () =>{
    pixel = pixel + 2;
    output.style.fontSize = pixel + 'px';
});
minPx.addEventListener('click', () =>{
    pixel = pixel - 2;
    output.style.fontSize = pixel + 'px';
});