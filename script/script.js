let regex={
    Email:/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
    Password:/^[\w]{8,16}$/,
    Last: /^[A-Za-z\-]+$/i,
    First: /^[A-Za-z\-]+$/i,
    Phone: /237\-6[\d]{7}/
}

let form=document.querySelectorAll('input');
 function error(input,regex){
        if(regex.test(input.value)){
            input.className='valid';
            return true;
        }
        else{
            input.className='invalid';
            return false;
        }
 }
 function Confirm(Pass){
    let word=document.querySelector('#password');
    if(Pass.value==word.value){
        Pass.className='valid';
    }else{
        Pass.className='invalid';
    }
 }
 form.forEach(input=>{
    input.addEventListener('keyup',(e)=>{
        if(e.target.name=='Confirm'){
        Confirm(e.target);
        }
       error(e.target,regex[e.target.name]);
        console.log(e.target.name);
        console.log(input)
    })
 })