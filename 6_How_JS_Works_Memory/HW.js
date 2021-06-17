console.log("varName", varName);
var varName;
console.log("varName", varName);
varName = "Captain America";
console.log("varName", varName);
fn();
function fn() {
    console.log("Hello from fn");
}
fn();
fnContainer();
var fnContainer = function () {
    console.log(" I am an Expression");
}
fnContainer();