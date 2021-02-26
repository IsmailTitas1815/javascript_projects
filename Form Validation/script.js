// let form = document.querySelector("#form");



// form.addEventListener('submit',validation);

function validation(e) {
    let username = document.querySelector("#username").value;
    let email = document.querySelector("#email").value;
    let password1 = document.querySelector("#password1").value;
    let password2 = document.querySelector("#password2").value;
    let mobileNumber = document.querySelector("#mobileNumber").value;

    let usernameCheck = /^[A-Za-z0-9. ]{3,30}$/;
    let emailCheck = /^([a-zA-Z0-9]\.?)+[^\.]@([a-zA-Z0-9]\.?)+[^\.]$/;
    let password1Check = /^(?=.*[0-9])(?=.*[!@#%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
    let mobileNumberCheck = /^(\+)?(88)?01[0-9]{9}$/;
   
    if (usernameCheck.test(username)) {
        console.log("Username");
        document.querySelector('#userError').innerHTML = ' ';
    }
    else {
        document.querySelector("#userError").innerHTML = "**Username is invalid";
        return false;
    }
    if (emailCheck.test(email)) {
        console.log("Email");
        document.querySelector('#emailError').innerHTML = ' ';
    }
    else {
        document.querySelector("#emailError").innerHTML = "**Email is invalid";
        return false;
    }
    if (password1Check.test(password1)) {
        console.log("pass1");
        document.querySelector('#passwordError').innerHTML = ' ';
    }
    else {
        document.querySelector("#passwordError").innerHTML = "**Password is invalid";
        return false;
    }
    if (password2.match(password1)) {
        console.log("pass2");
        document.querySelector('#CpasswordError').innerHTML = ' ';
    }
    else {
        document.querySelector("#CpasswordError").innerHTML = "**Password does not match";
        return false;
    }
    if (mobileNumberCheck.test(mobileNumber)) {
        console.log("number");
        document.querySelector('#mobileNumberError').innerHTML = ' ';
    }
    else {
        document.querySelector("#mobileNumberError").innerHTML = "**Mobile Number is invalid";
        return false;
    }

    e.preventDefault();
}
