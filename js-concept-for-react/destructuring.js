//1.array destructuring
const numbers =[34 , 65];
//separate
const num1 =numbers[0];
const num2 =numbers[1];
const [number1, number2] =[44, 56];

const [valu1, value2] =numbers;

//using function

function bowl(bluePen,redPen){
    const myPens= [bluePen, redPen];
    return myPens;
}

console.log(bowl(87, 54));

const [first, second] =bowl(55, 66);
console.log([first, second]);

//using object
const student={
   name: 'Anik Farhan',
   age :34,
   movies:['king khan', 'Ra one']
  }


//const [firstMovie, secondMovie]=['king khan', 'Ra one'];
const [firstMovie, secondMovie]=student.movies;
console.log([firstMovie, secondMovie]);


//object destructuring


const {name, age}={id: 12, name: 'raha', salary: 2900, age:12};
console.log({name ,age});

const student1={
   name1: 'Tnik Farhan',
   age1 :3,
   movies1:['king khan', 'Ra one', 'Zebin'],
   skill:{
    language: ['c', 'css', 'js'],
    frontend:'react',
    backend:'node'
   }
  }

  const {name1 ,age1} = student1;

  //object inside object

  const{frontend,backend}=student1.skill;

  //if array
  const [learned] = student1?.skill?.language; // optional chaining
  console.log([learned]);
