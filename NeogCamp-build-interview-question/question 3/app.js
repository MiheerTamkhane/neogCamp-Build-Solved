const headOne = document.querySelector('#headOne');
const headTwo = document.querySelector('#headTwo')
const headThree = document.querySelector('#headThree')
const output = document.querySelector('#output');
const input = document.querySelector('#input')

headOne.addEventListener('click', () => {
    let inputText = input.value ;
    // console.log(inputText)
    output.innerHTML = `<h1>${inputText}</h1>`;
})
headTwo.addEventListener('click', () => {
    let inputText = input.value ;
    // console.log(inputText)
    output.innerHTML = `<h2>${inputText}</h2>`;
})
headThree.addEventListener('click', () => {
    let inputText = input.value ;
    // console.log(inputText)
    output.innerHTML = `<h3>${inputText}</h3>`;
})