// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1)

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

/* The reason is that an equality check == and 
comparisons > < >= <= work differently.
Comparisions convert null to a number. treating it as 0.
That's why (3) null >=0 is true and (1) null > 0 is false */


console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

//mostly we avoid the comparision of above undefined and null one 

// === strict equality 

console.log("2" === 2); // if == was written then true output but === gives false output




