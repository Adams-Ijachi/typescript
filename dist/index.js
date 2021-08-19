"use strict";
//Basic Types
let num = 5;
let company = "xup";
let isPublished = true;
let x = "xup";
num = 9;
console.log('num', num);
let data = [];
let new_data = [];
data = [1, 2, 3, 5];
new_data.push('j');
new_data.forEach(function (item, index, array) {
    console.log(array);
});
console.log('data', data);
// Tuples
let person = ['xup', 9, true]; //in this order
// Tuple Array
let tuple_array = [['xup', 9, true], ['xup', 9, true]];
// nested arrays
let nested_array = [[[[1, 2, 3], [4, 5, 6]], [[7, 8, 9], [10, 11, 12]]]];
// union
// let union : string  number  = 1;
// ENUM
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
console.log(Color.Red);
let obj = { id: 1, name: 'xup' };
// console.log(obj.id);
// Type assertion
let cid = 2;
let customers = cid;
// functions
// // spread function
// // let spread_function : (...args:any[]) => any = (...args) => args;
// const fn : (x:number,...args:any[]) => number = function(x) {
//     return args;
// }
const addNum = (x, y) => x + y;
console.log(addNum(1, 2));
const user2 = { id: 2, name: 'xup' };
// user2.id = 1;
// console.log(user2.id)
const add = (x, y) => x + y;
class Person {
    constructor(names, ages, id) {
        this.names = names;
        this.ages = ages;
        this.age = ages;
        this.name = names;
        this.id = id;
    }
    register() {
        return `user ${this.name} is registered `;
    }
}
const adam = new Person('adam ijachi', 20, 1);
const john = new Person('john', 20, 1);
const steve = new Person('steve', 20, 1);
console.log(adam.register());
console.log(john.register());
console.log(steve.register());
class Employee extends Person {
    constructor(names, ages, id, position) {
        super(names, ages, id);
        this.position = position;
    }
    getPosition() {
        return this.position;
    }
}
const newPosition = new Employee('steve bonds', 20, 1, 'software');
console.log(newPosition.getPosition());
console.log(newPosition.register());
// Generics
const getArrays = (items) => {
    return new Array().concat(items);
};
let numArray = getArrays([1, 2, 3]);
let strArray = getArrays(['a', 'b', 'c']);
console.log(numArray);
// imo
// const getArrays = <T>(items:T[]):T[] =>{
//     return new Array().concat(items)
// };
