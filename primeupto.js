function check(){

let num1=parseInt(document.getElementById('value').value,10);
let num2=parseInt(document.getElementById('value1').value,10);
 for(let i=num1;i<num2;i++){
    if(isprime(i)){
        console.log(i);
    }
 }
};

function isprime(num){
    for(let i=2;i<Math.sqrt(num);i++){
        if(num%2===0){
            return false;
        }
    }
    return true;
}


