function fn() {
    console.log(a);
    var a = 10;
    console.log(a);
    if (a == 10) {
        var a=20;
        console.log(a);
    }
    console.log(a);
}
fn();