let istrue;
let keepData;
           
function checkUser(){
    let a=document.getElementById("user").value;
    const checking1= /^[a-z]+$/;
    istrue=checking1.test(a);
  }

function enter(){
    checkUser();
    console.log(istrue);
        if(document.getElementById("user").value =="" || istrue==false){
        alert("הכנס שם באותיות באנגלית בלבד");
        document.getElementById("user")="";
    }else{
        localStorage.setItem(`user`, document.getElementById("user").value)       
        window.location.href = "http://127.0.0.1:5500/game.html";  
        document.getElementById("user")="";  
    } 
}

