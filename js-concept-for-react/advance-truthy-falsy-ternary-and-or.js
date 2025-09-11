//{},[]
//falsy -> '',0,false,null, undefined

let food;
const money=20;
if(money >100){
    food = 'fruit';
}
else{
    food ='ice-cream';
}

//ternary
let food1 = money>100? 'fruit' : 'ice-cream';


let drink=(money > 100 && money <105)?'coke' : 'filter water';
console.log(drink);

const num1 = 52;
console.log(num1);
//number to string conversion
const numStr = num1+'';//number + empty string = string
console.log(numStr);

//string to number (parseInt)

const input = '500';
const inpputNum = +input; //string to number

// function call

const isActive = true;
const showUser=()=>console.log('display User');
const hiddenUser =() =>console.log('hidden User');

isActive ? showUser():hiddenUser; 
//use && if the left side is true then right side will be executed
isActive && showUser();

//use || if the left side false right side execute
isActive || showUser();
//toggle boolean

isActive =! isActive;
