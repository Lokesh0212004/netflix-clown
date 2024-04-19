let text=document.getElementById('txt');
let pass=document.getElementById('pwd');
let txtErr=document.getElementById('TextErr');
let pwdErr=document.getElementById('PassErr');
let button=document.querySelector('button');
button.addEventListener("click",(event)=>{
    event.preventDefault();
    if(text.value===""){
        text.style.border="2px solid red"
        txtErr.innerHTML="*Please enter a valid email address or phone number"
    }else{
        text.style.border="1px solid gray"
        txtErr.innerHTML="";
    }
    if(pass.value.length<5){
        pass.style.border="2px solid red"
        pwdErr.innerHTML="*Your password must conatin between 4 and 60 Characters."
    }else{
        pass.style.border="1px solid gray"
        pwdErr.innerHTML="";
    }
});