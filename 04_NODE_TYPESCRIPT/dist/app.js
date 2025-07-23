"use strict";
// console.log('Hello, world!');
// function greet(name: string){
//     return `Hello, ${name}!`;
// }
// console.log(greet('Alice'));
// basic types 
let isDone = false;
let decimal = 6;
let color = "blue";
let list = ["hello", "world"];
let random = 4; // can be any type
random = "string now"; // can change type
let tuple = ["hello", 10]; // fixed size array with specific types
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
let c = Color.Red;
console.log(c); // 1
const user = {
    firstName: "John",
    lastName: "Doe",
    createdAt: new Date(),
    age: 30
};
console.log(user.firstName); // John
