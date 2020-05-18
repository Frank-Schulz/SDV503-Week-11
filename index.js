'use strict';

// Recursive functions
/*
function recuFunc(param) {
    recuFunc(param)
}
*/

/*
function recuFuncOne(param) {
    recuFuncTwo(param)
}

funciton recuFunctionTwo(param) {
    recuFuncOne(param)
}
*/

function test(x) {
    const result = ('Is this a recu function?');
    if(result === true) { // Base case or stop point
        return true;
    };
    test(param); // Recursive call/invocation
};

function number(num) {
    let total = 1;
    for(let n = num; n > 1; --n) {
        total = total * n;
    }
    return total;
};

let result = number(4);
console.log(result);



/*
function factorial(n) {
    if(n === 1 || n === 0) {
    }
    return factorial(n-1) // recursive call
}
console.log(factorial(number))
*/

function countdown(num) {
    if(num <= 0) {
        // console.trace()
        return num;
    }
    console.log(num);
    return countdown(--num);
}

result = countdown(5);
console.log(result);
