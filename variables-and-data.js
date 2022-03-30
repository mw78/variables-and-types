/*
    *Variables, Data Types, and Typing
 */

let add = 1 + 2;
let sub = 2 - 1;
let mult = 2 * 4;
let division = 4 / 2;
let mod = 5 % 2;

let string = "String 1 " + "String 2";

console.log(string);

/*
    *Conditionals, Functions, Scope, and Loops
*/

// Equals
let equals = 1 === 1;
//console.log(equals)

// Greater than
let greaterThan = 5 > 1;

// Less than
let lessThan = 2 < 10;

// Greater than Equals
let greaterThanEq = 5 >= 5;

// Less than Equals
let lessThanEq = 4 <= 9;

// Not Equals
let notEquals = 5 !== 2;

// Example
let storeA = 2.40;
let storeB = 4.40;

let storeAIsLower = storeA < storeB;
//console.log(storeAIsLower);

// Add an if statement
if (storeAIsLower) {
    console.log("Store A has a lower price.")
// Add an else if statement to make a comparison if prices are identical
} else if (storeB < storeA) {
    console.log("Store B has a lower price.")
} else {
    console.log("Their prices are equal.")
}

// Use functions to encapsulate a code to become reusable in other places
// Functions have two main features: parameters and the code they execute
// So to not copy and paste everything, create a function on top:

// Add function and parameters (storeA, storeB):
function CompareStorePrices (storeA, storeB) {
    let storeAIsLower = storeA < storeB;
    // Add an if statement
    if (storeAIsLower) {
        console.log("Store A has a lower price.")
    // Add an else if statement to make a comparison if prices are identical
    } else if (storeB < storeA) {
        console.log("Store B has a lower price.")
    } else {
        console.log("Their prices are equal.")
    }
}

// To run a function call its name and put in new parameters:
CompareStorePrices(10,5);
CompareStorePrices(7, 10);
//CompareStorePrices(3, 24);
//CompareStorePrices(100, 23);

function squareNum (number) {
    return number * number;
}
// You can easily change the parameter and run this function:
let squaredNumber = squareNum(7);
console.log(squaredNumber)

// Make sure your function only does one thing and keep it simple.
// Don't exceed 20 lines of code for a function.

// Scope: Certain values or variables are only accessible
// within certain levels of your code

// Global Scope:
let x = 10;

function addNumbers (n, m, x) {
    // Function Scope:
    console.log(x);
    let b; // b has to be defined outside the if block first and cascades down
    // Block Scope (like if scopes have their own scope):
    if (1===1) {
        b = 8;
    }
    console.log(b);
    return n + m;
}

// console.log(n) "n" is not defined outside the function but:
//addNumbers(2, 3, 8);


// Arrays: Data Structure (arrays start at 0):
//              0  1  2  3          4        5  6 (indexing)
let ourArray = [1, 2, 3, 4, ['a', 'b', 'c'], 5, 6,]; // You can have an array within an array
console.log(ourArray[4]);

// Loops are structured much like an if block to repeat certain steps:
// Example: for(counter; comp; incr) {}

for(let i = 0; i<=5; i++) {
    console.log("i is equal to: " + i);
    console.log(ourArray[i]) // [i] is used as an index, the array runs 5 times:
}



