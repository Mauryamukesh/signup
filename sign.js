// Form Validation
let username = document.getElementById('username');
let email = document.getElementById('email_id');

let flag = 1;
function myFormValidation()
{
    if(username.value == "")
    {
        document.getElementById('userError').innerHTML = "username is empty"
        flag = 0;
    }
    else
    {
        document.getElementById('userError').innerHTML = "";
        flag = 1;
    }
    if(email.value == "")
    {
        document.getElementById('emailError').innerHTML = "Email id is wrong";
        flag = 0;
    }
    else
    {
        document.getElementById('emailError').innerHTML = "";
        flag = 1;
    }
    if(flag)
    {
        return true;
    }
    else
    {
        return false;
    }
}
//password condition
function check()
{
    let password = document.getElementById('password').value;
    let cpassword = document.getElementById('cpassword').value;
    if(password == 0)
    {
        document.getElementById('cpasswordError').innerHTML = "password can't empty";
        document.getElementById('cpasswordError').style.color = "red";
    }
    else if(password == cpassword)
    {
        document.getElementById('cpasswordError').innerHTML = "match found";
        document.getElementById('cpasswordError').style.color = "green";
    }
    else
    {
        document.getElementById('cpasswordError').innerHTML = "matches not found";
        document.getElementById('cpasswordError').style.color = "red";
    }
}
// password
function myfunction()
{
    var x = document.getElementById("password");
    var y = document.getElementById("hide1");
    var z = document.getElementById("hide2");
    if(x.type == 'password')
    {
        x.type = "text";
        y.style.display = "block";
        z.style.display = "none"
    }
    else
    {
        x.type = "password";
        y.style.display = "none";
        z.style.display = "block";
    }
}
function myRefunction()
{
    var x = document.getElementById("cpassword");
    var y = document.getElementById("hide_4");
    var z = document.getElementById("hide_3");
    if(x.type == 'password')
    {
        x.type = "text";
        y.style.display = "block";
        z.style.display = "none"
    }
    else
    {
        x.type = "password";
        y.style.display = "none";
        z.style.display = "block";
    }
}