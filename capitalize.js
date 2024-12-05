let message=prompt("Enter message","hello world");
function capital() {
    let content=document.getElementById('msg');
    arr=message.split(" ").map(element=>element.charAt(0).toUpperCase()+element.slice(1).toLowerCase()).join(' ');
    console.log(arr);
 
    
   
};