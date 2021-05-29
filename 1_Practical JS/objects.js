// object -> group of key : value pair
//key :  value -> property
//key :  function -> method
let cap = {
    name: "Steve",
    lastName: "Rogers",
    address: {
        city: "Manhatten",
        state: "New York"
    }
    , age: 35,
    isAvenger: true,
    movies: ["First Avenger", "winter soldier", "civil war"],
    sayHi: function () {
        console.log("Cap say's Hi");
    }
};
// Get 
// console.log(cap.name);
// console.log(cap.age);
// console.log(cap.movies[1]);
// cap.sayHi();
// SET/UPDATE
// console.log("cap :", cap);
// cap.age = 36;
// cap.isAvenger = false;
// cap.friends = ["Tony", "Bruce", "Peter"];
// console.log('`````````````````````````');
// // delete 
// delete cap.address
// // console.log("cap :", cap);
// for (let key in cap) {
//     console.log(key, " : ", cap[key]);
// }
// let propKey = "age";
// console.log(cap.age);
// console.log(cap[propKey]);
// console.log(cap["age"]);
console.log(cap.xyz);

