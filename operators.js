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
