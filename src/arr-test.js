const arr = [100, 20, 304, 4, 5, 0, '01'];
const shift = 2;

// rotate left by n < array length:
// console.log(`rotated: ${[...arr.slice(shift), ...arr.slice(0, shift)]}`);
const lastItem = arr.unshift();
console.log('this is unshift of array',lastItem);
const rr = [...arr, lastItem];
console.log('repeat last item of array',rr);
const coupleArr = ["morton", "sahar"];
const ArrToText = coupleArr.join().replace(",", " ");
console.log('nari familly without kids', coupleArr);
console.log('converted array to text',ArrToText);
const text = "hey it is morton";
const textToArray = text.split(" ");
console.log('text: ',text);
console.log('Convert text to an array',textToArray);
const nariFamily = coupleArr.push("parmis", "daris");
console.log('this is nari family number',nariFamily);
console.log('this is nari family with kids',coupleArr, 'they are :', nariFamily);
// const dad = coupleArr.shift();
// console.log(dad, 'Is dady');
coupleArr.unshift();
// coupleArr[coupleArr.lenght] = 'morton'
console.log('sssss',coupleArr);

// const kids = ["Parmis", "Daris"];
// const parents = ["Morton", "Sahar"];
// const nari = [...kids, ...parents];

// console.log(nari);
coupleArr.reduceRight;
console.log('reduceright',coupleArr);
arr.sort((a, b) => a - b);

console.log('sorted array',arr);

// // console.log(arr[0]);
// arr.reduce((accumulator, currentValue) =>
//   console.log(accumulator + currentValue)
// );

/* numbers array */
const numbers = [5, 10, 15, 10, 25];

const total = numbers.reduce((accumulator, item) => accumulator + item, 0);
console.log(total);
setTimeout(() => {
  console.log("this is slice",numbers.slice(1,3));
}, 1000);


console.log(numbers);

const arr1 = ["a", "b", "c", "d", "e"];
let newarr = [];
const arr2 = arr1.map((item) => {
  if (item === "a") {
    item = "[CAT, Dog]";
  }
  newarr.push(item);
}); 
console.log(newarr);
const origArr = ["a", "b", "c", "d", "e"];
const transformedArr = origArr.map((n) => n + "Hi!");
console.log(transformedArr);







