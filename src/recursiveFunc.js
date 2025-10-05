
const interviewOne = () => {
    /** create function that maps function to each elemet of an array
     * and returns a new array and provide a cube function which transform reach result
     * in the array as cubed - x*x*x recursion
     */
    const arr = [1, 2, 3, 4]
    const cubeFunc = item => item * item * item

    const mapFunc = (func, arr) => {
        return arr.map(func)
    }
    console.log(arr);
    const mapFunc2 = (arr) => {
        const newArr = arr.map(item => item * item * item)
        return newArr;
    }

    console.log(mapFunc(cubeFunc, arr));
    console.log(mapFunc2(arr));
    // factorial function recursion
    // long way using for
    const mapFunc1 = (func, arr) => {
        const res = new Array(arr.length)
        for (let i = 0; i < arr.length; i++) {
            res[i] = func(arr[i]);
        }
        return res
    }
    console.log(mapFunc1(cubeFunc, arr));
    console.log(arr);

    // factorial function recursion
    const factorial = (num) => num < 2 ? 1 : num * factorial(num - 1);

    console.log(factorial(5));
}

// another factorial recursive function
const factorialRec = function fac(num) {
    return num < 2 ? 1 : num * fac(num - 1);
}

console.log(factorialRec(4));

const user = {
    name: 'Morton',
    getName: function () {
        return console.log('How "this" keyword works in object:', this.name)
    }
}

/**
 * the value of 'this' keyboard redefined by bind({name:'Parmis'})
 */
const newName = user.getName.bind({ name: 'Parmis' })
// here bind reasign this to user object will show error if only use user.getName();
const withBindObject = user.getName.bind(user)
withBindObject();
newName();

user.getName();

const users = [
    {
        name: 'Morton',
        job: 'frontend Developer',
        age: 52
    },
    {
        name: 'Sahar',
        job: 'Sales for builder',
        age: 48
    },
    {
        name: 'Pedram',
        job: 'Construction For builder',
        age: 45
    },
]

const searchFor = 'frontend';
const userFilter = item => item.job.toLowerCase().match(searchFor.toLowerCase());
const filteredUser = users.filter(userFilter);
console.log(filteredUser);







export default interviewOne
