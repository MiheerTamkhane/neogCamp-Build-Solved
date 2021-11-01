const input = document.querySelector('#input')
const btn = document.querySelector('#submit')
const output = document.querySelector('#output')
btn.disabled = true
input.style.borderColor = 'red'
input.style.outline = 'none'
input.addEventListener('input', () =>{
    console.log(input.value.length);
    if(input.value.length >= 10){
        btn.disabled = false;
        input.style.borderColor = 'green'
        input.style.borderWidth = '3px'
    }
})
