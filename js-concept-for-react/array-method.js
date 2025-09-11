const products =[
    {name: 'laptop', price: 32000, brand:'lenevo', color: 'silver' },
    {name: 'mobile', price: 132000, brand:'Iphone', color: 'golden' },
    {name: 'watch', price: 42000, brand:'Relox', color: 'bronze' },
    {name: 'sunglass', price: 2000, brand:'len', color: 'blck' },
    {name: 'camera', price: 112000, brand:'canon', color: 'cyan' },
    {name: 'tablet', price: 72000, brand:'walton', color: 'white' }
];


//map -> array of object of specific property's value
const brands =products.map(product =>product.brand);
console.log(brands);
const prices= products.map(product =>product.price);
console.log(prices);

//no return

products.forEach(product=>console.log(product))
products.forEach(product=> console.log(product.color))
// products.forEach(product =>{
//     const colorContainer = document.getElementById('div')
// })

//filter -> who fullfill condiiton

const cheap = products.filter(product => products.price <=5000);
console.log(cheap);
const SpecificName = products.filter(product =>product.name.includes('n')); //inclues checks does this character or digit or string have or not
console.log(SpecificName) // return array of object


//find -> return first match    // return object

const special =products.find(product=>product.name.includes('n'));
console.log(special);
