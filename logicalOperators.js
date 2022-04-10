let ORcombinations = [
    true || true, // true
    false || true, // true
    true || false, // true
    false || false, // false,
    true || false || false // true
]

ORcombinations.map(x => console.log(x))

let ANDcombinations = [
    true && false, // false
    true && true, // true
    false && true, // false
    false && false // false
]

ANDcombinations.map(x => console.log(x))

// ! NOT
console.log(!true) // false

