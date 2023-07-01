function add(n1, n2){
    let sum = n1+n2;
    return sum;
}


function subtract(n1,n2){
    let difference = n1-n2;
    return difference
}

function multiply(n1,n2){
    let sum = n1*n2;
    return sum;
}

function divide(n1,n2){
    let sum = n1/n2;
    return sum;
}

//console.log(add([2,1]));
//console.log(subtract([2,1]));
//console.log(multiply([2,1]));
//console.log(divide([5,2]));
let number1, number2, operator;

function operate(n1,n2, operator){
    if (operator == 'plus') {
        return add(n1,n2);
    } else if (operator == 'minus'){
        return subtract(n1,n2);
    } else if (operator == 'multiply'){
        return multiply(n1,n2);
    } else if (operator == 'divide'){
        return divide(n1,n2);
    }
}

const number = document.querySelectorAll('.display-change');
const display = document.querySelector('.display');
const operator_class = document.querySelectorAll('.operator'); 
let displayValue = '';

let displayChange = (event) =>{
    const clickedNumber = event.target.textContent;
    if (clickedNumber == 'C'){
        display.textContent = '';
        displayValue = '';
        return;
    } else if (clickedNumber == 'AC'){
        display.textContent = '';
        displayValue = '';
        return;
    } else if (clickedNumber == '.'){
        return;
    }
   // console.log('number');
    displayValue += clickedNumber;
    display.textContent = displayValue;
    //console.log(displayValue);
}
let counter = 1;
let result;
let numberSubmit = (event) =>{
    selected_operator = event.target.textContent;

    if (counter == 1) {
        number1 = parseInt(displayValue);
        displayValue = '';
        display.textContent = '';
        counter++;
    } else if (counter == 2){
        number2 = parseInt(displayValue);
        displayValue = '';
        display.textContent = '';
        if (selected_operator == '+'){
            result = add(number1,number2);
            number1 = result;
            console.log(result);
        } else if (selected_operator == '-'){
            result = subtract(number1,number2);
            number1 = result;
            console.log(result);
        } else if (selected_operator == '='){
            console.log(result);
        }
    }
    
}


number.forEach((item) =>{
    item.addEventListener('click', displayChange);
})

operator_class.forEach((item) =>{
    item.addEventListener('click', numberSubmit)
})