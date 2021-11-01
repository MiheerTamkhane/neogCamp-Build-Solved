const button = document.querySelector('#button');
const output = document.querySelector('#output')
const url = 'https://randomsuser.me/api/';

button.addEventListener('click', () =>{

    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(errHandler)
})

function errHandler(err){
   alert(err)
   output.innerText = err
}