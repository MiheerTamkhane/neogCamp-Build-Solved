const button = document.querySelector('#fetch')
const output = document.querySelector("#output")
const url = "https://randomuser.me/api/?results=10"


button.addEventListener('click', () => {

    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data.results);
        data.results.forEach(ele =>{
            if(ele.gender === 'female'){
                ele.classList.add('pink');
                // output.style.color = 'pink'
                
            }
            console.log(ele.gender);
            output.innerHTML += `<li>${ele.name.title} ${ele.name.first} ${ele.name.last}</li>`;
            
        })
    })
})