"use strict";

/* Ensures use of modern JS spec. Modern JavaScript supports “classes” and “modules” 
– advanced language structures, that enable use strict
by default */

// https://javascript.info/var - var idiosyncrasies

/* [1] var has no 'block scope' so variables declared with
it will be either function-scoped or global-scoped */

if(true){
    var a = true;
    let b = false;
}

console.log(`a`, a);
// console.log(`b`, b); // ReferenceError: b is not defined

/* [2] var allows for redeclarations */

var item = 'pear'
var item = 'banana'

/* var can be declared below its usage */

function greeting(){
    line = 'Good morning';
    console.log(line);
    var line;
}

greeting();

/* or an example using 'hoisting' */

function sayHi(){
    phrase = 'hello';
    if(true){
        var phrase;
    }
    console.log(phrase);
}

sayHi();

/* “immediately-invoked function expressions” (abbreviated as IIFE). */

(function() {
    var message = 'yeet!';
    console.log(message)
})();

/* miscellaneous */

let $ = 1;
let _ = 5;
// let 1a = 12; // invalid
// let my-thing = 123; // invalid
let имя = '...';
let 我 = '...';
console.log($ + _);

// constant and unchanging
const myBirthday = '18.04.1982';
// myBirthday = '19.04.1982'; // const myBirthday = '18.04.1982';

const COLOR_RED = "#F00"; // hard coded values
