/**
 * Part 1:
 *    What will print and why?
 *    First 1 is printed by the console.log
 *    Then we call the y function which prints 2 and then calls the x function
 *    The x function prints undefined because a is declared but not initialized
 * 
 *    What will change if we delete line 15? Why?
 *    If we delete the line 'var a' the x function will instead print the value of
 *    the a variable declared outside the function which is 1
 * 
 * Part 2:
 *    Change to ES6 syntax (use arrow functions and change var to let).
 * 
 * Part 3:
 *    Modify the code so that it prints 1, 2, 2, in that order. Do not move
 *        console logs.
 */

const x = () => {
  let a = 2;
  console.log(a);
}

const y = () => {
  let a = 2;
  console.log(a);
  x();
}

let a = 1;
console.log(a);
y();
