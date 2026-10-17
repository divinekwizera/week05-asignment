// Grade decision engine
// if/else is suitable because each mark belongs to one grade range.

let mark = 84;

if (
    typeof mark !== "number" ||
    !Number.isFinite(mark) ||
    mark < 0 ||
    mark > 100
) {
    console.log("Invalid mark: enter a finite number from 0 to 100.");
} else {
    let grade;
    let feedback;

    if (mark >= 80) {
        grade = "A";
        feedback = "Excellent";
    } else if (mark >= 70) {
        grade = "B";
        feedback = "Good work";
    } else if (mark >= 60) {
        grade = "C";
        feedback = "Satisfactory";
    } else if (mark >= 50) {
        grade = "D";
        feedback = "Needs improvement";
    } else {
        grade = "F";
        feedback = "Keep practicing";
    }

    let result = mark >= 50 ? "PASS" : "FAIL";

    console.log(
        `Mark: ${mark} | Grade: ${grade} | ${feedback} | ${result}`
    );
}

// Extra challenge: test grade boundaries and invalid marks.
// A for loop is suitable for checking a fixed list of test values.
let testMarks = [0, 49, 50, 79, 80, 100, -1, 101];

for (let i = 0; i < testMarks.length; i++) {
    let testMark = testMarks[i];

    if (testMark < 0 || testMark > 100) {
        console.log(`Test mark ${testMark}: INVALID`);
    } else if (testMark >= 80) {
        console.log(`Test mark ${testMark}: A`);
    } else if (testMark >= 70) {
        console.log(`Test mark ${testMark}: B`);
    } else if (testMark >= 60) {
        console.log(`Test mark ${testMark}: C`);
    } else if (testMark >= 50) {
        console.log(`Test mark ${testMark}: D`);
    } else {
        console.log(`Test mark ${testMark}: F`);
    }
}