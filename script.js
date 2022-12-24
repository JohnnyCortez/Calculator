const buttons = document.querySelectorAll('button');
const display = document.querySelector('#display');

let operand1 = null;
let operand2 = null;
let operator = null;

buttons.forEach(button => {
    button.addEventListener('click', event =>{
        const value = event.target.innerText;
        if(value === '+' || value === '-' || value === '*'||
        value === '/'){
            operator = value;
            operand1 = parseFloat(display.innerText);
            display.innerText = '';
        } else if(value === '='){
            operand2 = parseFloat(display.innerText);
            display.innerText = eval(operand1 + operator + operand2);
        } else if (value === 'C') {
            operand1 = null;
            operand2 = null;
            operator = null;
            display.innerText = '';   
        } else {
            display.innerText += value;

        }
    });
});