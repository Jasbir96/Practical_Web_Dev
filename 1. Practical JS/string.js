let singleQuotes = '   How are you   ';
let doubleQuotes = "double quotes ki string";

// console.log(singleQuotes);
// console.log(doubleQuotes);
// let char = singleQuotes.charAt(4);
// let ascii = singleQuotes.charCodeAt(4);
// let subStr = singleQuotes.substring(2, 8);
// console.log(char);
// console.log(ascii);
// console.log(subStr);
singleQuotes = singleQuotes.trim();
let arrStr = singleQuotes.split(" ");
console.log(arrStr);
let str = arrStr.join("+");
console.log(str);


