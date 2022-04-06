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

// typeof is an operator, not a function

console.log(typeof undefined)
console.log(typeof 0)
console.log(typeof 10000n)
console.log(typeof false)
console.log(typeof "foo")
console.log(typeof Symbol("id"))
console.log(typeof Math)
console.log(typeof null) // null returns "object" – this is an error in the language, it’s not actually an object.
console.log(typeof alert)

/*
    8 basic data types in JavaScript:

    number for numbers of any kind: integer or floating-point, integers are limited by ±(253-1).
    bigint is for integer numbers of arbitrary length.
    string for strings. A string may have zero or more characters, there’s no separate single-character type.
    boolean for true/false.
    null for unknown values – a standalone type that has a single value null.
    undefined for unassigned values – a standalone type that has a single value undefined.
    object for more complex data structures.
    symbol for unique identifiers.

*/