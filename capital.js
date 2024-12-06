const text=document.getElementById('text');
const showarea=document.getElementById('textshow');
function capital(action){
    if(action==='add'){
        
        console.log(text.value);
    }
    if(action==='capitalise'){
        let stext=text.value;
       let newword = stext.trim().split(' ');;
       let showtext=changer(newword,temp=[],0);
       let cap=showtext.toString();
       console.log(cap);
       showarea.textContent=`${showtext}`;
       showarea.style.color='blue';
    }
}

console.log(text.value);

// function changer(shtext,){
//     let newword=shtext.trim().split(' ');
//     console.log(newword);
//     let newtec='';
//     newword.forEach(element => {
//         newtec+=(element.charAt(0).toUpperCase()+element.slice(1))+" ";
//     });
//     console.log(newtec);
// }

function changer(newword=[],temp=[],i=0){
    if(i===newword.length){
        return temp.join(' ');
    }
    let word=(newword[i].charAt(0).toUpperCase()+(newword[i].slice(1)));
    temp.push(word);
    return changer(newword,temp,i+1);
}