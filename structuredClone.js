// create object a circular reference to itself
const original = { name: "MDN" };
original.itself = original;

// clone it
const clone = structuredClone(original);

console.assert(clone !== original); // objects not same identity
console.assert(clone.name === "MDN"); // have same values
console.assert(clone.itself === clone); // circular reference preserved
