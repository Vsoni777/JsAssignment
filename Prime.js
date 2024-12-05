function prime(num){
    let n=Number(num);
    if(n<2) return;
    for(let i=2;i<=Math.sqrt(n);i++){
       if(n%i===0){
        console.log("number is not prime");
        return;
       }
    }
    console.log("number prime")
}