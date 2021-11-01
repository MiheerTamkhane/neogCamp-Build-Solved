const button = document.querySelector('#button')
const output = document.querySelector('#output')

const ram = {
    name : "Ram",
    age : 25,
    yuga : "Treta"
}

const krishna = {
    name : 'Krishna',
    age : 31,
    yuga : "Dwapar"
}

button.addEventListener('click', () => {
    clickHandler(ram,krishna)
})

function clickHandler(objOne , ObjTwo ){
    if(objOne.age > ObjTwo.age){
        output.innerText = objOne.name + ' has more age!'
    }else{
        output.innerText = ObjTwo.name + ' has more age!'
    }
}