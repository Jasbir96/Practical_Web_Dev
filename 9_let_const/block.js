// if (true) {
//     console.log("Hello");
//     console.log("hello again")

// }
// {} -> block
// sh
// let fruits = "apple";
// console.log(fruits);
// {
//     // console.log(fruits) TDZ
//     let fruits;
//     console.log(fruits);
//     fruits = "orange";
//     console.log(fruits);
// }
// console.log(fruits);


// let fruits = "apple";
// console.log(fruits);
// {
//     // console.log(fruits) TDZ
//     let fruits;
//     console.log(fruits);
//     fruits = "orange";
//     {
//         console.log(fruits)
//     }
//     console.log(fruits);
// }
// console.log(fruits);

// variable shadowing -> legal 
// var fruits = "apple";
// console.log(fruits);
// {
//     // console.log(fruits) TDZ
//     let  fruits = "orange";;
//     console.log(fruits);
   
    
// }
// console.log(fruits);
// illelgal 
let fruits = "apple";
console.log(fruits);
{
    // console.log(fruits) TDZ
    var  fruits = "orange";;
    console.log(fruits);   
}
console.log(fruits);
