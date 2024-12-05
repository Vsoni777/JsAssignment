let a=prompt("Enter number");
let b=prompt("Enter second number");
height=height??100;

let num=Number(a);
let num1=Number(b);
if(isNaN(num)||isNaN(b)){
    console("numer are invalid");
}else{
    result=num+num1;
    if(result>10){
        console.log("number are greater than 10");
    }else{
        console.log("number are not greate");
    }
}