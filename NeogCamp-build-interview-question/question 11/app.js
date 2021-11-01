// Create two objects with name, age, and yuga as Ram, 25, Treta. Krishna, 31, Dwapar. Write a function which takes two objects and return the person with more age.
const button = document.querySelector('#button');
const output = document.querySelector('#output')
const obj1 ={
    name:'Ram',
    power: 2500,
    yuga : 'Treta'
}
const obj2 ={
    name:'Krishna',
    power: 2325,
    yuga : 'Dwapar'
}
function clickHandler(ram, krishna){

    if(ram.power > krishna.power){
        output.innerText = ram.name + " has more power!";
    }else{
        output.innerText = krishna.name + " has more power!";
    }
}
button.addEventListener('click',()=>[
    clickHandler(obj1, obj2)
])
