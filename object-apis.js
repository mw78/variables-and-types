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


