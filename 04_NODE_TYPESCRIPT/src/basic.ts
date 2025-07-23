// console.log('Hello, world!');

// function greet(name: string){
//     return `Hello, ${name}!`;
// }
// console.log(greet('Alice'));

// basic types 

let isDone: boolean = false;

let decimal: number = 6;    

let color: string = "blue";

let list: string[] = ["hello", "world"];

let random : any = 4; // can be any type
random = "string now"; // can change type
let tuple: [string, number] = ["hello", 10]; // fixed size array with specific types

enum Color {
    Red = 1,
    Green,
    Blue
}

let c: Color = Color.Red;
console.log(c); // 1

// interface

interface Person {
    firstName: string;
    lastName: string;
    age?: number; // optional property
    readonly createdAt: Date; // read-only property
}

const user : Person ={
    firstName: "John",
    lastName: "Doe",
    createdAt: new Date(),
    age: 30
}
console.log(user.firstName); // John

type User = {
    title: string;
    price: number;
    email?: string; // optional property
};

// function with type annotations
function Add(x: number, y: number): number {
    return x + y;
}

function greetUser(user: User): string {
    return `Hello, ${user.title}! Price is ${user.price}.`;
}

console.log(greetUser({ title: "Book", price: 19.99 }));

