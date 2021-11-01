const inputOne = document.querySelector('#input-one');
const inputTwo = document.querySelector('#input-two');
const add = document.querySelector('#add')
const sub = document.querySelector('#sub')
const mul = document.querySelector('#mul')
const div = document.querySelector('#div');
const output = document.querySelector('#output');

add.addEventListener('click', () =>{
let valueOne =  inputOne.value;
let valueTwo =  inputTwo.value;

   output.innerText = +valueOne + +valueTwo;
});

sub.addEventListener('click', () =>{
    let valueOne =  inputOne.value;
    let valueTwo =  inputTwo.value;
    
       output.innerText = +valueOne - +valueTwo;
    });
    
    mul.addEventListener('click', () =>{
        let valueOne =  inputOne.value;
        let valueTwo =  inputTwo.value;
        
           output.innerText = +valueOne * +valueTwo;
        });

  div.addEventListener('click', () =>{
            let valueOne =  inputOne.value;
            let valueTwo =  inputTwo.value;
            
     output.innerText = +valueOne / +valueTw       });
            