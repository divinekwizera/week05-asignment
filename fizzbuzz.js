// FizzBuzz with a twist
// A for loop is suitable for a fixed sequence from 1 to 100.
// Check multiples of both 3 and 5 before checking either individually.

let fizzBuzzCount = 0;
let output = "";

for (let number = 1; number <= 100; number++) {
    let label;

    if (number % 3 === 0 && number % 5 === 0) {
        label = "FizzBuzz";
        fizzBuzzCount++;
    } else if (number % 3 === 0) {
        label = "Fizz";
    } else if (number % 5 === 0) {
        label = "Buzz";
    } else {
        label = String(number);
    }

    if (number > 1) {
        output += ", ";
    }

    output += label;
}

console.log(output);
console.log(`FizzBuzz outputs: ${fizzBuzzCount}`);

// Extra challenge: extend the sequence to 150 and include Pop.
// Precedence: FizzBuzzPop, FizzBuzz, FizzPop, BuzzPop,
// Fizz, Buzz, Pop, and finally the number.

let extendedOutput = "";
let extendedFizzBuzzCount = 0;

for (let number = 1; number <= 150; number++) {
    let label = "";
    let by3 = number % 3 === 0;
    let by5 = number % 5 === 0;
    let by7 = number % 7 === 0;

    if (by3 && by5 && by7) {
        label = "FizzBuzzPop";
        extendedFizzBuzzCount++;
    } else if (by3 && by5) {
        label = "FizzBuzz";
        extendedFizzBuzzCount++;
    } else if (by3 && by7) {
        label = "FizzPop";
    } else if (by5 && by7) {
        label = "BuzzPop";
    } else if (by3) {
        label = "Fizz";
    } else if (by5) {
        label = "Buzz";
    } else if (by7) {
        label = "Pop";
    } else {
        label = String(number);
    }

    if (number > 1) {
        extendedOutput += ", ";
    }

    extendedOutput += label;
}

console.log("Extended FizzBuzz from 1 to 150:");
console.log(extendedOutput);
console.log(
    `Extended FizzBuzz outputs: ${extendedFizzBuzzCount}`
);