// create object a circular reference to itself
const original = { name: "MDN" };
original.itself = original;

// clone it
const clone = structuredClone(original);

console.assert(clone !== original); // objects not same identity
console.assert(clone.name === "MDN"); // have same values
console.assert(clone.itself === clone); // circular reference preserved

/* 	Copying a value in JavaScript is almost always 
 	shallow, as opposed to deep. That means that 
 	changes to deeply nested values will be visible
 	in the copy as well as the original. */

// spreads are most often used for shallow copies
const myOriginal = {
	someProp: "with a string",
	anotherProp: {
		a: 1,
		b: 2
	}
}

const myShallowCopy = {...myOriginal};

myShallowCopy.aNewProp = "a new value";
console.log(myOriginal.aNewProp); // undefined

/* 	adding or changing a deeply nested property
 	affects both the copy and the original */
myShallowCopy.anotherProp.c = "another new value";
console.log(myOriginal.anotherProp.c);
