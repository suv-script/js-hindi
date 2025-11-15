let score = "33 abc"


// console.log(typeof score);
// console.log(typeof (score));

 let valueInNumber = Number(score)// permanently converts datatpe to number
// console.log(typeof valueInNumber); // give type number
// console.log(valueInNumber); //give NaN because score's value is not number

//"33" => 33
// "33abc" => NaN
// true => 1 false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

//1 => true ; 0 => false
// " " => false
//"suvrat" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// ***************** Operations ******************//

let value = 3 
let negValue = -value 
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3); // ** represents power
// console.log(2/2);
// console.log(2%2); // % remainder

let str1 = "hello"
let str2 = " suvrat"

let str3 = str1 + str2 
console.log(str3);

// console.log(1 + "2");
// console.log("1" + 2);
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
// console.log(gameCounter);

// link to study
//https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion

let x = 3 
const y = ++x

console.table([x, y]);

/******* about postfix and prefix increment********/

/* Prefix Increment (++i)


Increases the value before the expression is evaluated.


The updated value is used immediately.


Example:
let a = 5;
let b = ++a; 
// a becomes 6 first, then b = 6

Postfix Increment (i++)


Increases the value after the expression is evaluated.


The old value is used first, then it increments.


Example:
let x = 5;
let y = x++; 
// y = 5 first, then x becomes 6

In simple words:


++i → increment first, use later


i++ → use first, increment later

*/








