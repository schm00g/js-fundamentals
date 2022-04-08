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
