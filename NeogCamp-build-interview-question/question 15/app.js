const button = document.querySelector("#fetch")
const output  = document.querySelector('#output')
const url = "https://randomuser.me/api/?results=10";

button.addEventListener('click', ()=>{

    fetch(url)
    .then(res => res.json())
    .then(data => {
        let users = data.results;
        users.forEach(element => {
            console.log(element.dob.age);
            if(element.dob.age >= 45){
                output.innerHTML += `<ul>
                <li>${element.name.title} ${element.name.first} ${element.name.last}</li>
                </ul>`
            }
        });
    })
})
