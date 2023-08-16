
let result=document.getElementById('inputext');
let name=document.getElementById('name');


let nameUser = window.prompt('Enter Your Name:');


let calculate=(number)=>{
    result.value+=number;
}

let Result=()=>{
    try{
        result.value=eval(result.value)
    }
    catch(err){
        alert(nameUser + ' bhai bewakofi na kar ye galat baat he');
    }
}
function clr(){
    result.value="";
}
function del(){
    result.value=result.value.slice(1,-1);
}


// this is officialy by Nadir Ali Khan Contact 0304-2019-543 for any query.
