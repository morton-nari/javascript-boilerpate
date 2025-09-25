

const interview = () => {
// pass by value is for primitive data type which is boolean number or string
    let a = 1;
    let b = a;
    b++
    console.log(' this is pass by vaslue so by adding 1 to b they are not the same', a , b);
// passing by refrence is for none primitive data type like array and object
   const arr = []
   const arrRef = arr;
   arrRef.push(3);
// this is pass by refrence for array so by pushinh 3 to arrRef both arr and arrRef will change 
console.log(` ${arr} - ${arrRef}`)

   const arr1 = [1 , 2 , 3]
   const newArr = [...arr1];
   newArr.push(5,6,7);
   // by using spreate operator we make new arry so the result would be seperate array
console.log(`this is first array:  ${arr1} and this is new array: ${newArr}`)
   
   

    const obj1 = {};
    const objRef = obj1;
    objRef.firstName = ' Mori'
// this is pass by refrence for object so by adding name 3 to objRef both obj and objRef will change
    console.log( obj1, ' - ' , objRef);  
    
}
// map filter and reduce

const prices = [ 10,20,30,50,60 ]
const person = [
    {
        name: 'Morteza',
        lastName: 'Nari',
        age: 52
    },
    {
        name: 'sahar',
        lastName: 'Nari',
        age: 48
    },
    {
        name: 'Parmis',
        lastName: 'Nari',
        age: 14
    },
]

const mapEx = prices.map(item =>  item + 5);
const filterEx = prices.filter(item => item > 20)

/**
 * reduce is the most powerfull higher order method for arrays
 *  which all the time returns accumilaters which can be number (total) or an array and need a initial value
 * and we can do mapping filtering and lot more with that
 * arr.resuce((acum, curr) => { return accum },initialValue)
 */
const reduceEx = prices.reduce((total, curr) => {
    total += curr
    return total
}, 0)
const reduceEx1 = person.reduce((newArr, curr) => {
const names = curr.name
    newArr.push(names)
        return newArr
}, [])

const reduceEx2 = prices.reduce((newArr, curr) =>{
    const item = curr + 3
    if (item > 30) {
        newArr.push(item)
    }
    return newArr
}, [])

console.log(mapEx);
console.log(filterEx);
console.log(reduceEx);
console.log(reduceEx1);
console.log(reduceEx2);
// falsy values undefined, null , Nan, 0 , '', false;
const a = undefined;
const b = null;
const c = NaN;
const d = 0;
const e = '';
const f = false;

// check the flasy value by console.log(Boolean(a)) OR console.log(!!a)
console.log(Boolean(a));
console.log(!!a);
console.log(!!b);
console.log(!!c);
console.log(!!d);
console.log(!!e);
console.log(!!f);

// 'this' is the keyboard to have access to the current objet
const person1 = {
    firstName: 'Morteza',
    lastName: 'Nari',
    /**
     *  remember using arrow function will break the scope
     *  and 'this' key board not going to have access to the current object
     *  fullName: () => {
        return `this is full name: ${this.firstName} ${this.lastName}`
    }
     */
     fullName() {
        return `this is full name: ${this.firstName} ${this.lastName}`
    }
}
console.log(person1.fullName());

// coercion in javascript happen when add string to a number so it will change the type of result to string
const coercion = '10' + 2 + 5 + '8';
console.log(coercion);
console.log(typeof coercion);
console.log(typeof Boolean(0));
console.log(typeof Number('ss'));

// Tupe of is to check the data type
console.log(typeof 37 === 'number');
console.log(typeof NaN === 'number');
console.log(typeof undefined === 'undefined');
// result of typeof for an array would be object so the correct way of testing an array is Array.isArray
console.log(typeof [1,2,3] === 'object');
console.log(Array.isArray([1,2,3]));
// null is instace of object but the typeof is an object
console.log(typeof null === 'object');
console.log( null instanceof Object);
// empty object is instance of object
console.log(typeof {} === 'object');
// Date and regex are object too

// delete is for deleting the property of an object and better to avoid as it breaks the contract of application

const person2 = {
    firstName: 'Parmis',
    lastName: 'Nari',
    age: 14
}
const res2 = delete person2.firstName;
console.log(person2);



const reverseArray = (arr) => {
    const reversedArr = [...arr];
    reversedArr.reverse();
    return reversedArr
  }
  
  console.log(reverseArray([5,4,5,66,55,222,8,55,888,]));

export default interview

