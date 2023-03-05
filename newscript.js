const firstname = document.querySelector('#exampleInputName1');
const lastname = document.querySelector('#exampleInputName2');
const firstnameWarning = document.querySelector('#firstnameHelp');
const email = document.querySelector('#exampleInputEmail1');
const emailWarning = document.querySelector('#emailHelp');
const password = document.querySelector('#exampleInputPassword1');
const passwordWarning = document.querySelector('#passwordHelp');
const confirmPassword = document.querySelector('#exampleInputConfirmPassword1');
const confirmPasswordWarning = document.querySelector('#confirmPasswordHelp');
const submit = document.querySelector('#submit');
const signUpPage = document.querySelector('#signupPage');
const loginPage = document.querySelector('#loginPage');
signUpPage.addEventListener('click',()=>{
    window.location.href = "./signup.html"
})
loginPage.addEventListener('click',()=>{
    window.location.href = "./login.html"
})

let users = [];
if(window.localStorage.getItem('users')){
    JSON.parse(window.localStorage.getItem('users')).map(value=>{
        users.push(value);
    })
}

console.log(users)
submit.addEventListener('click', (e) =>{
    e.preventDefault();
    //name validation
    // const firstnameArray = firstname.value.split(' ');
    // if(firstnameArray.length<2){
    //     firstnameWarning.innerHTML = 'Please enter name';
    //     firstnameWarning.style.color = 'red';
    //     return false;
    // }
    // else{
    //     firstnameWarning.innerHTML = '';
    // }
    // const lastnameArray = lastname.value.split('');
    // if(lastnameArray.length<2){
    //     lastnameWarning.innerHTML = 'Please enter name';
    //     lastnameWarning.style.color = 'red';
    //     return false;
    // }
    // else{
    //     lastnameWarning.innerHTML = '';
    // }
    //Email Validation
    if(email.value.indexOf('@')<=0){
        emailWarning.innerHTML = 'Please enter valid email address';
        emailWarning.style.color = 'red';
        return false;
    }
    //abc@gmail.com
    if(email.value.lastIndexOf('.')!==email.value.length-4){
        emailWarning.innerHTML = 'Please enter valid email address';
        emailWarning.style.color = 'red';
        return false;
    }
    else{
        emailWarning.innerHTML = '';
    }
    //password validation
    //1 Uppercase
    if(!password.value.match(/[A-Z]/)){
        passwordWarning.innerHTML = 'Password should contain one upper case, one lowercase, one number, and one symbol';
        passwordWarning.style.color = 'red';
        return false;
    }
    //lowercase
    if(!password.value.match(/[a-z]/)){
        passwordWarning.innerHTML = 'Password should contain one upper case, one lowercase, one number, and one symbol';
        passwordWarning.style.color = 'red';
        return false;
    }
    if(!password.value.match(/[0-9]/)){
        passwordWarning.innerHTML = 'Password should contain one upper case, one lowercase, one number, and one symbol';
        passwordWarning.style.color = 'red';
        return false;
    }
    if(!password.value.match(/[!/@/#/$/%/^/&/*/</>/_/]/)){
        passwordWarning.innerHTML = 'Password should contain one upper case, one lowercase, one number, and one symbol';
        passwordWarning.style.color = 'red';
        return false;
    }
    else{
        passwordWarning.innerHTML = '';
    }
    //confirm password validation
    if(password.value!==confirmPassword.value){
        confirmPasswordWarning.innerHTML = 'Password and Confirm Password should be the same';
        confirmPasswordWarning.style.color = 'red';
        return false;
    }
    else{
        confirmPasswordWarning.innerHTML = '';
    }
    const userData = {
        email: email.value,
        password: password.value,
        firstname: firstname.value,
        lastname:lastname.value,
    };
    users.push(userData);
    console.log(users);
    window.localStorage.setItem('users', JSON.stringify(users));
    window.location.href = "./login.html";
})
if(window.localStorage.getItem('currentUser')){
    window.location.href = '/shop/index.html';
}
