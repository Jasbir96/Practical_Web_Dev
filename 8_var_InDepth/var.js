// 2015 es6
// hoisting
console.log("line number 3", varName);
// declare
var varName;
// assign
varName = 10;
console.log("line number 8", varName);
// reassign
varName = 20;
console.log("line number 11", varName);
var varName;
console.log("line number 13", varName);
// scope -> function 

