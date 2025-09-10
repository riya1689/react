//1.Template string
const numbers =[89, 35, 98, 12];

const student={
   name: 'Anik Farhan',
   age :34,
   movies:['king khan', 'Ra one']
  }
const about =`His name is ${student.name}.Age ${student.age}has ${numbers[2]} movies.Also liked movies ${student.movies[0]} `;
console.log(about);

//2.Arrow function

const getdigit=()=>55;

const addDigit=(num)=>{
    num+6;
}
const isEven=x=>{
    x%2==0;
    return 'even';
}

const addThree=(x,y,z)=>{
    x+y+z;
}

const doMath=(num1, num2)=>{
const sum = num1+num2;
return sum;
}

//3.Spread operator
const newNumbers = numbers;
numbers.push(23);
//array keep reference.if we change motther array.then value of children array also change.
//if we want copy array without reference.then use spread operator

const secondNewNumber = [...newNumbers];
newNumbers.push(32);
console.log(secondNewNumber);
console.log(numbers);

//create a new array from an older array and add an element
const currentnumbers=[...numbers, 45];