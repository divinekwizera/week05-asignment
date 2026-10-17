// Pattern printing studio
// The outer loop controls the rows.
// The inner loop builds each row character by character.
// Spaces position the stars, while the number of stars changes per row.

let rows = 5;

// A. Growing right triangle
// Each new row contains one more star.
console.log("A. Growing right triangle");

for (let row = 1; row <= rows; row++) {
    let line = "";

    for (let column = 1; column <= row; column++) {
        line += "*";
    }

    console.log(line);
}

// B. Inverted right triangle
// Each new row contains one fewer star.
console.log("B. Inverted right triangle");

for (let row = rows; row >= 1; row--) {
    let line = "";

    for (let column = 1; column <= row; column++) {
        line += "*";
    }

    console.log(line);
}

// C. Centered pyramid
// Leading spaces decrease, and the number of stars increases by two.
console.log("C. Centered pyramid");

for (let row = 1; row <= rows; row++) {
    let line = "";

    for (let space = 1; space <= rows - row; space++) {
        line += " ";
    }

    for (let star = 1; star <= 2 * row - 1; star++) {
        line += "*";
    }

    console.log(line);
}

// D. Inverted pyramid
// Leading spaces increase while the number of stars decreases by two.
console.log("D. Inverted pyramid");

for (let row = rows; row >= 1; row--) {
    let line = "";

    for (let space = 1; space <= rows - row; space++) {
        line += " ";
    }

    for (let star = 1; star <= 2 * row - 1; star++) {
        line += "*";
    }

    console.log(line);
}

// E. Number staircase
// Each row prints numbers starting at 1 and ending at the row number.
console.log("E. Number staircase");

for (let row = 1; row <= rows; row++) {
    let line = "";

    for (let number = 1; number <= row; number++) {
        line += number;
    }

    console.log(line);
}

// F. Hollow square
// The first and last rows are full of stars.
// Other rows contain stars at the edges and spaces in the middle.
console.log("F. Hollow square");

for (let row = 1; row <= rows; row++) {
    let line = "";

    for (let column = 1; column <= rows; column++) {
        if (
            row === 1 ||
            row === rows ||
            column === 1 ||
            column === rows
        ) {
            line += "*";
        } else {
            line += " ";
        }
    }

    console.log(line);
}

// Extra challenge: hollow pyramids with 3, 5, and 7 rows.
// The outer loop controls rows; inner loops build spaces and stars.
// Only the two edges and the base contain stars.

let sizes = [3, 5, 7];

for (let sizeIndex = 0; sizeIndex < sizes.length; sizeIndex++) {
    let size = sizes[sizeIndex];

    console.log(`Hollow pyramid (${size} rows)`);

    for (let row = 1; row <= size; row++) {
        let line = "";

        // Spaces decrease from top to bottom to center the pyramid.
        for (let space = 1; space <= size - row; space++) {
            line += " ";
        }

        // The first and last star positions form the sides.
        // The final row is filled to form the base.
        for (let column = 1; column <= 2 * row - 1; column++) {
            if (
                row === size ||
                column === 1 ||
                column === 2 * row - 1
            ) {
                line += "*";
            } else {
                line += " ";
            }
        }

        console.log(line);
    }
}