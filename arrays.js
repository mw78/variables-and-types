let ourArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// If we have more values added we use ourArray.length (total length of array):
for(let i = 0; i<ourArray.length; i++) {
    console.log(ourArray[i]);
}

let arrLen = ourArray.length;
for(let i = 0; i<arrLen; i++) { // value is already calculated here, so saves time compared to above
    console.log(ourArray[i]);
}
// Try to avoid nested loops as they can take up too much time!

// While Loops: run until a conditional is false; while(true) would run forever
let x = 0
while (x < 10) {
    console.log('Ran');
    x = x + 1; // Incrementor inside while loop, 'Ran' will be printed 10 times.
}

// Be careful with while loops as they cun crash your code (they are infinite)
