if (0) { // 0 is falsy
    console.log(`oh hi there 0`) 
}

if (1) { // 1 is truthy
    console.log(`oh hi there 1`)
}

let age = 22;
let accessAllowed = (age > 21) ? true : false;
console.log(accessAllowed) // true

// ? can be used to replace if statement

let magicWord = 'pineapple';
(magicWord === 'pineapple') ? console.log(`correct: ${magicWord}`) : console.log(`incorrect ${magicWord}`);

// Boolean("0")
// true
// Boolean("1")
// true
// Boolean("")
// false
// Boolean(" ")
// true