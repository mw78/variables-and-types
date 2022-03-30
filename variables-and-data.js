/*
    *Variables, Data Types, and Typing
 */

let add = 1+2;
let sub = 2-1;
let mult = 2*4;
let division = 4/2;
let mod = 5%2;

let string = "String 1 " + "String 2";

console.log(string);

/*
    *Conditionals, Functions, Scope, and Loops
*/

// Equals
let equals = 1 === 1;
console.log(equals)

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
console.log(storeAIsLower);

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



