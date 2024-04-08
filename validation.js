const form=document.querySelector("#form");
const username=document.querySelector("#username");
const email=document.querySelector("#email");
const password=document.querySelector("#password");
const confirmpassword=document.querySelector("#confirmpassword");

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    checkinputs();
})

function checkinputs()
{
    const usernamevalue=username.value.trim();
    const emailvalue=email.value.trim();
    const passwordvalue=password.value.trim();
    const confirmpasswordvalue=confirmpassword.value.trim();

    if(usernamevalue === "")
    {
        seterror(username,"Please enter the username");
    }
    else{
        setsuccess(username);
    }
    if(emailvalue === "")
    {
        seterror(email,"Please enter the emailid");
    }
    // else if(!validate_email(emailvalue))
    // {
    //     seterror(email,"Please fill correct form of email");
    // }
    else{
        setsuccess(email);
    }
    if(passwordvalue === "")
    {
        seterror(password,"Please enter the password");
    }
    else if(passwordvalue.length<8)
    {
        seterror(password,"Please the more than 8 character");
    }
    else{
        setsuccess(password);
    }

    if(confirmpasswordvalue ==="")
    {
        seterror(confirmpassword,"Please enter the confirm password");
    }
    else if(confirmpasswordvalue!==passwordvalue)
    {
        seterror(confirmpassword,"Please enter the correct confirm password");
    }
    else{
        setsuccess(confirmpassword);
    }
}

function seterror(element,message)
{
    const inputgroup=element.parentElement;
    const errorelement= inputgroup.querySelector(".error");

    errorelement.innerHTML=message;
    inputgroup.classList.add("error");
    inputgroup.classList.remove("success")
}

function setsuccess(element)
{
    const inputgroup=element.parentElement;
    const errorelement = inputgroup.querySelector(".error");

    errorelement.innerHTML="";
    inputgroup.classList.add("success");
    inputgroup.classList.remove("error");
}

const validate_email=(email)=>{
    return String(email).toLowerCase.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
};