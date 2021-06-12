const fs = require("fs");
// let data = fs.readFileSync("f1.txt");
// console.log("" + data);
// async function
console.log("Before");
// async function nodejs 
fs.readFile("f1.txt", cb);
function cb(err, data) {
    if (err) {
        console.log(err)
    } else {

        console.log("data" + data);
    }
}
console.log("After");
console.log("Mean while");