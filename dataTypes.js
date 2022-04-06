console.log(1 / 0) // Infinity

console.log(Infinity)

console.log("hello" / 2) // NaN, such division is erroneous

/*  JavaScript is “dynamically typed” */

const bigInt = 67854356787654657899765n; // primitive
console.log(bigInt)

let isGreater = 4 > 1;
console.log(isGreater) // true

let age = null; // “nothing”, “empty” or “value unknown”

let name;
console.log(name) // undefined === 'value not defined'

/* objects can store collections of more complex data */

console.log(typeof undefined)
console.log(typeof 0)
console.log(typeof 10000n)
console.log(typeof false)
console.log(typeof "foo")
console.log(typeof Symbol("id"))
console.log(typeof Math)
console.log(typeof null)
console.log(typeof alert)