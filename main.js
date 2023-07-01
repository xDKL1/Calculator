const number_buttons = document.querySelectorAll('.number');
const buttons = document.querySelectorAll('.display-change');
const display = document.querySelector('.display');
const operators = document.querySelectorAll('.operator');
function add(numbers){
    let sum = numbers.reduce((partialSum, a) => partialSum + a, 0);
    return sum;
}

function subtract(numbers){
    var differences = [];

    for (var i = 0; i < numbers.length; i++) {
      for (var j = i + 1; j < numbers.length; j++) {
        var diff = Math.abs(numbers[i] - numbers[j]);
        differences.push(diff);
      }
    }
  
    return differences[0];
}


function multiply(numbers){
    let product = numbers.reduce((partialProd, a) => partialProd * a, 1);
    return product;
}

function divide(numbers){
    var quotient = numbers[0];

    for (var i = 1; i < numbers.length; i++) {
      quotient /= numbers[i];
    }
  
    return quotient;
}


//function operate(n1,n2, operator){
//    if (operator == 'plus') {
//        return add(n1,n2);
//    } else if (operator == 'minus'){
//        return subtract(n1,n2);
//    } else if (operator == 'multiply'){
//        return multiply(n1,n2);
//    } else if (operator == 'divide'){
//        return divide(n1,n2);
//    }
//}

let numbers = [];
let displayValue = '';
let operatorCount = 0;
let result = 0;
let operatorUsed = false;
let operator;

let displayChange = (event) =>{
    const clickedButton = event.target.textContent;
    
    if (clickedButton == 'C' || clickedButton == 'AC'){
        displayValue = '';
        display.textContent = displayValue;
        numbers = [];
        return;
    }
    
    displayValue += clickedButton;
    display.textContent = displayValue;
}

let operatorClick = (event) =>{
    const clickedOperator = event.target.textContent;
    operator = clickedOperator;
    operatorUsed = true;
    displayValue = '';
    display.textContent = displayValue;
    if (operator == '='){
        display.textContent = numbers[0];
        numbers = [];
        operatorUsed = false;
    }
} 
let numberClick = (event) =>{
    let result;
    if (!operatorUsed){
        numbers.push(parseInt(displayValue));
        console.log(numbers);
    } else {
        numbers.push(parseInt(displayValue));
        if (operator == '+'){
            result = add(numbers);
            console.log('sum is ' + result);
        } else if (operator == '−'){
            result = subtract(numbers);
            console.log('diff is ' + result);
        } else if (operator == '×'){
            result = multiply(numbers);
            console.log('product is ' + result);
        } else if (operator == '÷'){
            result = divide(numbers);
            console.log('quotient is ' + result);
        }
        numbers[0] = result;
        numbers.splice(1,1); 
        console.log(numbers);
    }
}

buttons.forEach((item) => {
    item.addEventListener('click', displayChange);
});

operators.forEach((item) =>{
    item.addEventListener('click', operatorClick);
});

number_buttons.forEach((item) => {
    item.addEventListener('click', numberClick);
})

