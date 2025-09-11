const addToLocalStorage= ()=>{
    const InputField = document.getElementById('Storage-id');
    const id = InputField.value;
    const outputField = document.getElementById('Storage-value');
    const value = outputField.value;
    //
    if(id && value){
        localStorage.setItem(id, value);
    }
    //localStorage.setItem(id, value);
    InputField.value='';
    outputField.value ='';

}

//
const myPen ={
    name:'pen',
    price: 28
}

localStorage.setItem('pen', JSON.stringify(pen));
//object array local storage rakhar somoy strigify akare rakhte hbe

const storePen = localStorage.getItem('pen');
const penObj = JSON.parse(storePen);//get from loacl storge as a JSON string .Convert it into object

pen.price=30;
