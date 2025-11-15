const accountId = 144553 // can not change 
let accountEmail = "suvrat@gmail.com" //can change
var accountPassword = "12345" //can change 
accountcity = "Jaipur"
let accountState;

// accountId = 2 // not allowed 


accountEmail = "hc@hc.com"
accountPassword = "212121211"
accountcity ="Bengaluru"

console.log(accountId);

/*
Prefer not to use var 
because of issue in block scope and fundamental scope 
*/

console.table([accountId, accountEmail, accountPassword, accountcity, accountState]); //output comes in tabular form

