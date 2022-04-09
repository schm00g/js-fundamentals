const expressions = [
    2 > 1, // true
    2 == 1, // false
    2 === 1, // false
    2 != 1 // true
];

expressions.map(x => console.log(x));

let result = 5 > 2; // true

/*  To see whether a string is greater than another, JavaScript 
    uses the so-called “dictionary” or “lexicographical” order. */

console.log('Z' > 'A') // true
console.log('Glow' < 'Glee') // false

console.log('2' > 1) // true (when types differ JS converts values to numbers)

console.log(true == 1) // true becomes 1
console.log(false == 0) // false becomes 0

// === is required for strict equality
console.log(0 == false)
console.log('' == false)
console.log(0 === false)