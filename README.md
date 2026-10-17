# Assignment 2: Control Flow & Pattern Challenges

JavaScript — Week 05

## Project files

1. `01-grade-decision-engine.js`
2. `02-weekly-class-planner.js`
3. `03-loop-laboratory.js`
4. `04-fizzbuzz-with-a-twist.js`
5. `05-student-results-analyzer.js`
6. `06-pattern-printing-studio.js`
7. `07-guessing-game.js`
8. `index.html`

## Requirements

- Use if/else, switch, and loops.
- Use console.log() to display results.
- Use prompt() only for the guessing game.
- Do not define custom functions or use recursion.
- Do not use array helper methods such as map(), filter(),
  or reduce().
- Do not use Math.max(), Math.min(), or repeat() for patterns.
- Include comments explaining why each loop is appropriate.

## How to run the programs

Install Node.js and open the project folder in VS Code.

Open the terminal and run each console program separately:

    node 01-grade-decision-engine.js
    node 02-weekly-class-planner.js
    node 03-loop-laboratory.js
    node 04-fizzbuzz-with-a-twist.js
    node 05-student-results-analyzer.js
    node 06-pattern-printing-studio.js

For the guessing game, open index.html in a web browser.
Open Developer Tools and select Console to see the messages.

## Loop explanations

### 1. Grade decision engine
An if/else chain selects the correct grade and feedback
according to the student's mark.

### 2. Weekly class planner
A switch statement maps day numbers to names and activities.
A for loop prints the seven-day schedule.

### 3. Loop laboratory
A for loop prints ascending even numbers.
A while loop prints descending even numbers.
The continue statement skips multiples of six.

### 4. FizzBuzz
A for loop checks numbers from 1 to 100.
Combined divisibility is checked before individual conditions.
The extended challenge adds Pop for multiples of seven.

### 5. Student results analyzer
A for...of loop visits each mark and calculates the summary.
Conditions count grades and determine pass or fail.

### 6. Pattern printing studio
Outer loops control rows.
Inner loops construct each row character by character.
Spaces align the pyramids, and conditional checks create
the hollow square and hollow pyramids.

### 7. Guessing game
A while loop continues until the player wins or reaches
five valid guesses.
The break statement exits immediately after a correct guess.
Cancel ends the game, while invalid entries do not consume
an attempt.

## Edge cases tested

1. Grade marks: 0, 49, 50, 79, 80, 100, -1, and 101.
2. Class planner: day numbers 1, 7, 0, and 8.
3. Student results: marks below 50 and a mark exactly equal to 50.
4. Guessing game: correct guess, five incorrect guesses,
   Cancel, blank input, and non-numeric input.

