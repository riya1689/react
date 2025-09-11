const products =[
    {name: 'laptop', price: 32000, brand:'lenevo', color: 'silver' },
    {name: 'mobile', price: 132000, brand:'Iphone', color: 'golden' },
    {name: 'watch', price: 42000, brand:'Relox', color: 'bronze' },
    {name: 'sunglass', price: 2000, brand:'len', color: 'blck' },
    {name: 'camera', price: 112000, brand:'canon', color: 'cyan' },
    {name: 'tablet', price: 72000, brand:'walton', color: 'white' }
];

const newProduct ={name:'webcam', price: 700, brand: 'lal'};

//copy products array and then add newProduct
const newProducts =[...products, newProduct];
console.log(newProducts);

//create a new array without one specific item

//remove property's means create a new array without the specific property's value

const remaining = products.filter(product => product.name !== 'phone');
console.log(remaining);