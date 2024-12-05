function duplicate(arr){
    const unique=new Set();
    let duplicate=[];
    arr.forEach(element => {
       if(unique.has(element)){
          unique.delete(element);
            duplicate.push(element);
       }else{
        unique.add(element);
       } 
    });
    console.log(duplicate);
    console.log(unique);
}