let email = document.querySelector("#email");
let phoneNumber = document.querySelector("#phone-number");
let postCode = document.querySelector("#post-code");


email.addEventListener("click", emailFunc);
phoneNumber.addEventListener("click", phoneFunc);
postCode.addEventListener("click", postFunc);

function emailFunc(e){
    console.log("email");
    let a = prompt();
    let re = /^([a-zA-Z0-9]\.?)+[^\.]@([a-zA-Z0-9]\.?)+[^\.]$/;
    console.log(re.test(a));
    if(re.test(a)){
        alert("Your Email is valid");
    }else{
        alert("Your Email is not valid");
    }
}

function phoneFunc(e){
    console.log("phone");
    let a = prompt();
    let re = /^(\+)?(88)?01[0-9]{9}$/;
    console.log(re.test(a));
    if(re.test(a)){
        alert("Your Phone Number is valid");
    }else{
        alert("Your Phone Number is not valid");
    }
}

function postFunc(e){
    console.log("post");
    let a = prompt();
    let re = /^[0-9]{4}$/;
    console.log(re.test(a));
    if(re.test(a)){
        alert("Your Post Code is valid");
    }else{
        alert("Your Post Code is not valid");
    }
}