let a = 'fizz'
let b = 'buzz'
let c
console.log(a ?? b) // fizz
console.log(b ?? c) // buzz
console.log(c ?? b) // buzz

// ?? returns the first argument if it’s not null/undefined. 
// Otherwise, the second one.

let height = null;
let width = null;

// important: use parentheses
let area = (height ?? 100) * (width ?? 50);

console.log(area); // 5000

/*  see precedence
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table
*/