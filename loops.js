// while loop

let i = 0;
while (i <= 10) {
    console.log(`i: `, i);
    i++;
}

let j = 10;
while (j) { // > 0 will be truthy
    console.log(`j: `, j);
    j--;
}

// do...while loop

let k = 10;
do {
    console.log(`doing!`, k);
    k--;
} while (k)

// for loop

for(let i = 0; i <= 10; i++){
    console.log(`i: `, i)
}

// remove parts
let h = 0;
for(; h <= 10; h++){
    console.log(`h: `, h)
}

let l = 0;
for(; l <= 5;){
    console.log(`l: `, l++)
}

/*  infinte loop example

    for(;;){
        console.log(`first`)
    }

*/

// breaking the loop

let sum = 0;

while(true){
    sum += Math.floor(Math.random() * 10);
    console.log(`sum: `, sum);
    if(sum > 100) break;
}

// continue stops current iteration (not the whole loop like break)

for(let i = 0; i <= 5; i++){
    if(i % 2 === 0) continue;
    console.log(`i: `, i)
}

/* how to break NESTED LOOPS? - labels 

    labelName: for (...) {
        ...
    }

*/

outer: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        let input = Math.random() * 10;
        // if an empty string or canceled, then break out of both loops
        if (!input) break outer; // (*)
        // do something with the value...
    }
}
console.log('Done!');
