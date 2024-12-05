let message=prompt("create sentence to find long word in this","i am");
function findlong(){
    let maxlength=0;
    arr=message.split(' ');
    newarr=arr.sort();
    console.log(newarr[0]+"it's length is"+newarr.length);
};