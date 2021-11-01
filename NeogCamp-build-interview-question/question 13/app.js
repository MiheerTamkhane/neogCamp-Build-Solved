const button = document.querySelector('#button')
const output = document.querySelector('#output')

const ram = {
    name : "Ram",
    power : 2500,
    yuga : "Treta"
}

const krishna = {
    name : 'Krishna',
    power : 2325,
    yuga : "Dwapar"
}
const powerPoints = 35;

button.addEventListener('click', () => {
    clickHandler(ram,krishna)
});

function clickHandler(objOne , objTwo ){
    let namePowerRam = (objOne.name.length * powerPoints) + objOne.power;
    let namePowerKrishna = (objTwo.name.length * powerPoints) + objTwo.power;

    if(namePowerRam > namePowerKrishna){
        output.innerText = objOne.name + ' has more Power!'
    }else{
        output.innerText = ObjTwo.name + ' has more Power!'
    }
}