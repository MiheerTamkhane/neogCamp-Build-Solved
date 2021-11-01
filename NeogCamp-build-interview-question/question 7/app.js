const button = document.querySelector('#fetch')
const output =document.querySelector('#output');

const url = 'https://api.github.com/users/MiheerTamkhane/repos';

button.addEventListener('click', () => {

    fetch(url)
    .then(res => res.json())
    .then(data => {
        data.forEach(element => {
            output.innerHTML += `<ul><li>${element.name}</li></ul>`
        });
    })
})
