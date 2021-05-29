// fileSystem
// files -> create ,        read,                   update ,  delete
// open -w ,                readfileSync         appendFile   unlinkSync
// writefileSync

let fs = require("fs");
// read
// let buffer = fs.readFileSync("abc.js");
// console.log("bin data " + buffer);
// create 
// fs.openSync("abc.txt", "w");
// no file -> create and file  exist-> content replace 
// create write
// fs.writeFileSync("abc.txt", "Hum aaj khush nhi hai");
// update
// fs.appendFileSync("abc.txt", "Bhai khush kyu nhi hai");

// folder(directory)
// create       read            delete 
// mkdirSync    readdirSync     rmdirSync

// fs.mkdirSync("meriDirectory");

// fs.writeFileSync("meriDirectory/merifile.txt", "Mera content");
// let content = fs.readdirSync("meriDirectory");
// console.log(content);
// for (let i = 0; i < content.length; i++) {
//     console.log("file ", content[i], "is removed");
//     // remove file
//     fs.unlinkSync("meriDirectory/" + content[i]);
// }
// remove folder
// fs.rmdirSync("meriDirectory")
// fs.existSync -> if a file exist at a path -> true/false
// let doesPathExist = fs.existsSync("abc.txt");
// console.log(doesPathExist);
// doesPathExist = fs.existsSync("abcd.txt");
// console.log(doesPathExist);
// // fs.lstatSync-> fs.lstatSync
// let detailsObj = fs.lstatSync(__dirname + "\\fileSystem.js");
// let ans = detailsObj.isFile();
// console.log(ans);
// ans = detailsObj.isDirectory();
// console.log(ans);

// C:\Users\Ritik Singh\Desktop\Youtube\Practical Web Development\Fun with Nodejs\myfolder
// C:\Users\Ritik Singh\Desktop\Youtube\Practical Web Development\Fun with Nodejs\abc.js
for (let i = 1; i <= 10; i++) {
    let dirPathToMake = `Lecture-${i}`;
    fs.mkdirSync(dirPathToMake);
    fs.writeFileSync(dirPathToMake + "\\"+"readme.md",` # readme for ${dirPathToMake}`);
}