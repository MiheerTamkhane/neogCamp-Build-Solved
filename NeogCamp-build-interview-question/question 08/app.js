const fetchBtn = document.querySelector('#fetch')
const fetchBtnTwo = document.querySelector('#fetchSecond');
const output = document.querySelector('#output')
const url = 'https://mock-practice.prakhar10v.repl.co/bollywood?name=';

function getURL(text){
    return url + text;
}

fetchBtn.addEventListener('click', () => {
    
    let textOne = fetchBtn.innerText;
    fetchData(textOne);

})

fetchBtnTwo.addEventListener('click', () => {
    let textTwo = fetchBtnTwo.innerText;
    fetchData(textTwo);
})

function fetchData(text){
    fetch(getURL(text))
    .then(res => res.json())
    .then(data => {
        console.log(data.message);
        output.innerText = data.message
    });
}