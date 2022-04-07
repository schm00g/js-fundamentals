/*
    often types are converted automatically
    for example with alert() string and ints
*/

// string conversion

let state = true
console.log(typeof state) // boolean

state = String(state)
console.log(typeof state) // string

// numeric conversion

console.log("1" / "2")

let str = "12312"
console.log(typeof str)

str = Number(str)
console.log(typeof str)

let age = Number("an arbitrary string instead of a number");

// alert(age); // NaN, conversion failed

console.log(Boolean(0))
console.log(Boolean(1))
console.log(Boolean("hello"))
console.log(Boolean(""))
