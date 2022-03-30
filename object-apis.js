/*
 * Objects, Interfaces, and API's
 */

// Objects contain : state and functionality
// Example: dog (state: breed, color, name, size, and functionality: bark, lick, bite, etc.)

let dog = {
    name: "Steve",
    color: "brown",
    breed: "Pug",
    size: "Small",
    // bark is the "key" here that precedes the function and serves as the function name as well:
    bark: function(){
        console.log("Bark!");
    },
}

dog.bark();

// Interface vs. Implementation: functionality of the objects

// API's = Application Programming Interface

// Rest API's use url's instead of functions to interact with other people's codes

function x(y) {
    y.num = y.num + 5;
    console.log(y);
}

let y = {
    name: "Tom", // if you turn y into an object it will change outside the function as well vs. just putting in a value
    num: 10,
};
x(y);
console.log(y);


