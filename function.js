// function calsum(a,b){
//     return a+b;
// }
// function value(){
//     a=Number(prompt("Enter first value"));
//     b=Number(prompt("Enter second value"));
//     return a,b;
// }

// const val=document.getElementsByTagName('h1');
// let a,b=value();
// console.log(calsum(a,b));
// let age=Number(prompt("Enter first value"))
// function checkage(age){
//     if(age>18){
//         console.log("you can give vote");
//     }else{
//         console.log("you are not eligable");
//     }
// }

// function power(a,b){
//     let num=1;
//     for(i=0;i<b;i++){
//         num*=a;
//     }
//     return num;
// }


// let msg=prompt("hello!Are you user","yes");
// let welcome=()=>{
//     if(msg=="yes"){
//         alert("Hello");
//     }
//     else if(msg=="no"){
//         alert("bye");
//     }else{
//         alert("new text");
//     }
// }

// welcome();

// function ask(question, yes, no) {
//     if (confirm(question)) yes();
//     else no();
//   }
  
//   ask(
//     "Do you agree?",
//     ()=>{ alert("You agreed."); },
//     ()=>{ alert("You canceled the execution."); }
//   );

// function hello(name) {
//     let phrase = `Hello, ${name}!`;
  
//     debugger;  // <-- the debugger stops here
  
//     say(phrase);
//   }

//   function say(phrase){
//     alert(`**${name}**`)
//   }

//   hello("vivek");
let checker=true;
function val(){
    
    if(checker){
let user={
    name:"vivek",
    age:12
};

document.getElementById('value').innerHTML="yhi hai zindagi dost!" +user.name+"and you are just"+user.age+"year old.";

let myarray=Object.values(user);
document.getElementById('val').innerHTML=myarray;

let fruit={
    "apple":100,
    "Banana":50,
    "Orange":150
}

for(let [key,value] of Object.entries(fruit)){
    console.log("Fruit name"+key+" and it's price"+value);
}

document.getElementById('json').innerHTML=JSON.stringify(fruit);
    }else{
        document.getElementById('value').innerHTML="click me!";
    }
    checker=!checker;
};


console.log(count);
function counter(){
    let counterconten=document.getElementById('count');
let count=parseInt(document.getElementById('myInput').value,10);
    if(checker){
    counterconten.innerHTML='';
    for(let i=0;i<count;i++){
        let spa=document.createElement('span');
        spa.textContent='i';
        counterconten.appendChild(spa);
    }
}else{
counterconten.innerHTML='';
}
checker!=checker;
}