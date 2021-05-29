#!/usr/bin/env node
let fs = require("fs");
// input
let inputArr = process.argv.slice(2);
// console.log(inputArr);
// options
let optionsArr = [];
let filesArr = [];
// identify -> options
for (let i = 0; i < inputArr.length; i++) {
    let firstChar = inputArr[i].charAt(0);
    if (firstChar == "-") {
        optionsArr.push(inputArr[i]);
    } else {
        filesArr.push(inputArr[i]);

    }


}
// options check
let isBothPresent = optionsArr.includes("-b") && optionsArr.includes("-n");
if (isBothPresent==true) {
    console.log("either enter -n or -b option");
    return;
}
// existence
for (let i = 0; i < filesArr.length; i++) {
    //    /buffer
    let isPresent = fs.existsSync(filesArr[i]);
    if (isPresent == false) {
        console.log(`file ${filesArr[i]} is not present`);
        return;
    }
}
// read
let content = "";
for (let i = 0; i < filesArr.length; i++) {
    //    /buffer
    let bufferContent = fs.readFileSync(filesArr[i]);
    content += bufferContent + "\r\n";
}
// console.log(content)
let contentArr = content.split("\r\n");
// console.log(contentArr);
// -s 
let isSPreset = optionsArr.includes("-s");
if (isSPreset == true) {
    for (let i = 1; i < contentArr.length; i++) {
        if (contentArr[i] == "" && contentArr[i - 1] == "") {
            contentArr[i] = null;
        } else if (contentArr[i] == "" && contentArr[i - 1] == null) {
            contentArr[i] = null;
        }
    }
    let tempArr = [];
    for (let i = 0; i < contentArr.length; i++) {
        if (contentArr[i] != null) {
            tempArr.push(contentArr[i])
        }
    }
    contentArr = tempArr;
}
console.log("`````````````````````")
// console.log(contentArr.join("\n"));
let isNPresent = optionsArr.includes("-n");
if (isNPresent == true) {
    for (let i = 0; i < contentArr.length; i++) {
        contentArr[i] = `${i + 1} ${contentArr[i]} `;
    }
}
// console.log(contentArr.join("\n"));
let isBPresent = optionsArr.includes("-b");
if (isBPresent == true) {

    let counter = 1
    for (let i = 0; i < contentArr.length; i++) {
        if (contentArr[i] != "") {
            // contentArr[i] = `${i + 1} ${contentArr[i]} `;
            contentArr[i] = `${counter} ${contentArr[i]}`;
            counter++;
        }
    }
}
console.log(contentArr.join("\n"));

