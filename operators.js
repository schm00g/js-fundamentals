/* 
    operand is what operators are applied to 
    operand * operand = x    
*/

// modify-in-place
let n = 10;
n += 5;
n *= 5;
n /= 10;
n -= 5;
console.log(n) // 2.5

let counter = 10;
counter++;
counter--;
console.log(counter); // 10

/* 
    Bitwise Operators 
    The operands are converted to thirty-two-bit
    integers and expressed by a series of bits    
*/
console.log(15 & 9) // 1111 & 1001 = 1001
console.log(15 | 9) // 1111 | 1001 = 1111
console.log(15 ^ 9) // 1111 ^ 1001 = 0110

// ex: The bitwise AND operator (&) returns a 1 
// in each bit position for which the corresponding bits of both operands are 1s. 

/*
    Logical Operators:
    - &&  (AND)
    - ||  (OR)
    - !   (NOT)

*/

var a1 =  true && true;     // t && t returns true
var a2 =  true && false;    // t && f returns false
var a3 = false && true;     // f && t returns false
var a4 = false && (3 == 4); // f && f returns false
var a5 = 'Cat' && 'Dog';    // t && t returns Dog
var a6 = false && 'Cat';    // f && t returns false
var a7 = 'Cat' && false;    // t && f returns false

/*  Short-circuit evaluation 
    false & anything
    true || anything
    here the anything will not be computed
*/

// Ternary Operator

let age = 25;
let state = (age >= 18) ? 'adult' : 'minor';
console.log(`status`, state);

// Comma Operator

var x = [0,1,2,3,4,5,6,7,8,9]
var a = [x, x, x, x, x];

for (var i = 0, j = 9; i <= j; i++, j--){
    console.log('a[' + i + '][' + j + ']= ' + a[i][j]);
}

let y = 1;
y = (y++, y);
console.log(y);

console.log((10, 15)) // 15, the last operand

// but seriously, y tho?

// three operations in one line
for (a = 1, b = 3, c = a * b; a < 10; a++) {
    // your logic...
}

/*
    Unary Operator -> takes only one operand

    delete object.property;
    delete object[propertyKey];
    delete objectName[index];

*/

const person = {
    name: 'Greg',
    age: 20,
    hair: 'brown'
}

delete person.hair;

console.log(person)

// arrays are just objects but don't use delete on them

const arr = [1, 2, 3, 4, 5, 6, 7];
delete arr[0]
console.log(`arr`, arr) // arr [ <1 empty item>, 2, 3, 4, 5, 6, 7 ]
console.log(arr[0]) // undefined as array is not reindexed

// instanceof operator

let today = new Date()
console.log(today instanceof Date) // true

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#comma_operator