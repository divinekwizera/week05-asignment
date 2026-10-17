// Loop laboratory

// A for loop is suitable for ascending even numbers
// because the starting value, ending value, and step are known.
let ascending = "";

for (let number = 2; number <= 50; number += 2) {
    if (number > 2) {
        ascending += " ";
    }

    ascending += number;
}

console.log(`Ascending: ${ascending}`);

// A while loop demonstrates descending iteration.
// The condition is checked before each repetition.
let descending = "";
let numberDown = 50;

while (numberDown >= 2) {
    if (numberDown < 50) {
        descending += " ";
    }

    descending += numberDown;
    numberDown -= 2;
}

console.log(`Descending: ${descending}`);

// A for loop checks every number in the fixed range 1–30.
// continue skips multiples of 6 and proceeds to the next number.
let remaining = "";

for (let current = 1; current <= 30; current++) {
    if (current % 6 === 0) {
        continue;
    }

    if (remaining !== "") {
        remaining += " ";
    }

    remaining += current;
}

console.log(`Numbers excluding multiples of 6: ${remaining}`);

console.log(
    "Explanation: 6, 12, 18, 24, and 30 are skipped by continue."
);

// Extra challenge:
// A for loop with a step of 2 visits only odd numbers from 1 to 99.
let oddSum = 0;

for (let odd = 1; odd <= 99; odd += 2) {
    oddSum += odd;
}

console.log(`Sum of odd numbers from 1 through 99: ${oddSum}`);