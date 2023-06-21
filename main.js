function add(numbers){
    let sum = numbers.reduce((x,y) => {
        return x+y;
    });
    return sum;
}


function subtract(numbers){
    let sum = numbers.reduce((x,y) => {
        return x-y;
    });
    return sum;
}

function multiply(numbers){
    let sum = numbers.reduce((x,y) => {
        return x*y;
    });
    return sum;
}

function divide(numbers){
    let sum = numbers.reduce((x,y) => {
        return x/y;
    });
    return sum;
}

//console.log(add([2,1]));
//console.log(subtract([2,1]));
//console.log(multiply([2,1]));
//console.log(divide([5,2]));
