//Basic Types


let num: Number = 5

let company : string = "xup";
let isPublished : boolean = true;
let x : any = "xup";
num = 9
console.log('num',num);

let data : number[]  = [];
let new_data : any[]  = [];
data = [1, 2, 3 , 5];
new_data.push('j')
new_data.forEach(function(item, index, array) {
    console.log(array);
});
console.log('data',data);

// Tuples

let person : [string, number, boolean] = ['xup', 9, true]; //in this order

// Tuple Array

let tuple_array : [string, number, boolean][] = [['xup', 9, true], ['xup', 9, true]];

// nested arrays
let nested_array : any[][][] = [[[[1, 2, 3], [4, 5, 6]], [[7, 8, 9], [10, 11, 12]]]];

// union
// let union : string  number  = 1;

// ENUM
enum Color {Red, Green, Blue}
console.log(Color.Red)

// object

type User = { id:Number, name:String };
let obj : User = { id:1, name:'xup'};
// console.log(obj.id);

// Type assertion
let cid : any = 2;
let customers = cid as number;

// functions
// // spread function
// // let spread_function : (...args:any[]) => any = (...args) => args;

// const fn : (x:number,...args:any[]) => number = function(x) {
//     return args;
// }

const addNum = (x:number,y:number): number => x+y;
console.log(addNum(1,2));
// return void function
// const fn : (x:number,...args:any[]) => void = function(x) {} 

// Interfaces
interface IUser {
    readonly id:number;
    name:string;
    age?:number;//optional
}

interface MathFunc{
    add(x:number,y:number):number;
    sub(x:number,y:any):number;
}

const user2 : IUser = { id:2, name:'xup'};

// user2.id = 1;
// console.log(user2.id)

const add : MathFunc['sub'] = (x,y) => x+y;
// console.log(add(1,'w'))

// classes
interface IPerson {
    id:number;
    name:string;
    age?:number;//optional
    register():string;
}
interface IPosition {
    position:string;
    getPosition():string;
  
}

class Person implements IPerson {
    // private id:number;
    id:number;
    name:string;
    age:number;
    constructor(public names:string, public ages:number,  id:number){
        this.age = ages;
        this.name = names;
        this.id = id;
    }

    register(){
        return `user ${this.name} is registered `;
    }
}



const adam = new Person('adam ijachi',20, 1);
const john = new Person('john',20, 1);
const steve = new Person('steve',20, 1);
console.log(adam.register());
console.log(john.register());
console.log(steve.register());


class Employee extends Person implements IPosition {
    position:string;
    constructor(names:string, ages:number, id:number, position:string){
        super(names, ages, id);
        this.position = position;
    }

    getPosition(){
        return this.position;
    }
}


const newPosition = new Employee('steve bonds',20, 1, 'software');
console.log(newPosition.getPosition());
console.log(newPosition.register());


// Generics
const getArrays = <T> (items:T[]):T[] =>{
     return new Array().concat(items)
};

let numArray = getArrays<Number>([1,2,3]);
let strArray = getArrays(['a','b','c']);
console.log(numArray);
// imo
// const getArrays = <T>(items:T[]):T[] =>{
//     return new Array().concat(items)
// };