
function palid(text){
    if(typeof text!='string'){
        return "enter String";
    }
    if(text.length<1){
        return true;
    }
    if(text[0]!==text[text.length-1]){
        return false;
    }
    return text.slice(1,text.length-1);
    
}

const text=document.getElementById('value');
const button=document.getElementById('palid');
 const message=document.getElementById('msg');
button.addEventListener('click',()=>{
    console.log(button.value);
    const word=text.value.trim();
    if(word===''){
        message.textContent="Please enter valid String";
    if (!isNaN(word)) {
        text.value='';
         text.focus(); 
        console.log("Integer value");
    }
    console.log(word);
    const result=palid(word);

    if(result){
        message.textContent="palidrome";
        message.style.color='green';
    }else{
        message.textContent="not palidrome";
        message.style.color='blue';
    }
}
});
