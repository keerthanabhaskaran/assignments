"use strict";
function fibonacci(num) {
    let result = 1;
    let a = 0;
    let b = 1;
    if (num < 0) {
        throw new Error("The given number is negative");
    }
    else if (num == 0) {
        result = 0;
    }
    else {
        for (let i = 1; i < num; i++) {
            result = a + b;
            a = b;
            b = result;
        }
    }
    return result;
}
try {
    console.log("fibonacci of 0 is: " + fibonacci(0));
    console.log("fibonacci of 8 is: " + fibonacci(8));
    fibonacci(-1);
}
catch (e) {
    console.log(e.message);
}
