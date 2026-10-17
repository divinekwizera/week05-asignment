// Weekly class planner
// switch is suitable because each day number maps to a specific day.

let dayNumber = 4;
let dayName = "";
let dayStatus = "";

switch (dayNumber) {
    case 1:
        dayName = "Monday";
        dayStatus = "FREE TIME";
        break;
    case 2:
        dayName = "Tuesday";
        dayStatus = "CLASS";
        break;
    case 3:
        dayName = "Wednesday";
        dayStatus = "FREE TIME";
        break;
    case 4:
        dayName = "Thursday";
        dayStatus = "CLASS";
        break;
    case 5:
        dayName = "Friday";
        dayStatus = "FREE TIME";
        break;
    case 6:
        dayName = "Saturday";
        dayStatus = "CLASS";
        break;
    case 7:
        dayName = "Sunday";
        dayStatus = "FREE TIME";
        break;
    default:
        console.log("Invalid day number. Enter a number from 1 to 7.");
}

if (dayName !== "") {
    console.log(`Day ${dayNumber}: ${dayName} — ${dayStatus}`);
}

// Extra challenge:
// A for loop is suitable because a week has exactly seven days.
for (let day = 1; day <= 7; day++) {
    switch (day) {
        case 1:
            console.log("Day 1: Monday — FREE TIME");
            break;
        case 2:
            console.log("Day 2: Tuesday — CLASS");
            break;
        case 3:
            console.log("Day 3: Wednesday — FREE TIME");
            break;
        case 4:
            console.log("Day 4: Thursday — CLASS");
            break;
        case 5:
            console.log("Day 5: Friday — FREE TIME");
            break;        case 6:
            console.log("Day 6: Saturday — CLASS");
            break;
        case 7:           console.log("Day 7: Sunday — FREE TIME");
            break;
    }
}