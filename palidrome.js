let message=prompt("enter message","naman");
function palidchecker(){
    let arr=message.split('')
    let reversearr=arr.reverse()
    let newmsg=reversearr.join('');
    if(message==newmsg){
        console.log("hi");
    }else{
        console.log("bye");
    }
  
}