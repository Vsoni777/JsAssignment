function duplicate1(arr,unique,duplicate,i) {
    if(i===arr.length){
        return duplicate;
    }
    //debugger;
    if(unique.has(arr[i])){
        duplicate.push(arr[i]);
    }else{
        unique.add(arr[i]);
    }
    return duplicate1(arr,unique,duplicate,i+1);
}
const Value=document.getElementById('value');
//const buttons=document.querySelectorAll('.btn')
const messageaera=document.getElementById('msg');

const arr=[];
let len=arr.length;
console.log(len);
function btnfunction(action){
    
        if(action==='add'){
        let number=Value.value.trim();
        if(isNaN(number)){
            messageaera.textContent="Enter Number in this filed";
            messageaera.style.color='red';
            Value.focus();
        } 
        
        arr.push(parseInt(number));
        console.log(arr);
        messageaera.textContent=`Enter Number in this filed ${number}`;
            messageaera.style.color='green';
    }else if(action==='duplicate'){
        if(arr.length<1){
            messageaera.textContent="Array is null";
            messageaera.style.color='Red';  
        }else{
            let unique1=new Set();
           
            let result=duplicate1(arr,unique1,temp=[],0);
            if(result.length>0){
                messageaera.textContent=`value is that  ${result.join(",")}`;
            }
        }
    }


    
}