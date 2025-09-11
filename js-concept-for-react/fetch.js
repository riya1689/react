//stringify
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

const student1JSON = JSON.stringify(student1);
console.log(student1JSON);
console.log(student1);

//parse
const student1Parse = JSON.parse(student1JSON);
console.log(student1Parse);

//fetch
fetch()
.then(res => res.json())
.then(data => console.log(data));

//keys, value

const keys = Object.keys(student1);
const values =Object.values(student1);

//for
const numbers =[12, 23, 78, 98];
numbers.forEach(num =>console.log(num)); // no  return;
numbers.map(num => num*3);

//for of on array like object
//for in -> on obj


