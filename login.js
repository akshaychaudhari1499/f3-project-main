
const loginEmail = document.querySelector('#exampleInputEmail2');
const loginEmailWarning = document.querySelector('#emailHelp2');
const loginPassword = document.querySelector('#exampleInputPassword2');
const loginSubmit = document.querySelector('#submit2');
const loginPasswordWarning = document.querySelector('#passwordHelp2');
const userData = JSON.parse(window.localStorage.getItem('users'));
console.log(userData);
const currentUser = {};
loginSubmit.addEventListener('click', (e) => {
    
    if(userData==null) {
        alert("No User Exist with this Email and Password ! Please signup first")
    }
    else{
        alert('LoginSuccess');
    }
    e.preventDefault();
    let countEmail = 0;
    userData.map(data => {
        console.log(data.password)
        if (data.email === loginEmail.value && data.password === loginPassword.value) {
            countEmail++;
            currentUser.email = data.email;
            currentUser.firstname = data.firstname;
            currentUser.password = data.password;
        }
        if (countEmail == 0) {
            loginEmailWarning.innerHTML = "Invalid!! Please try again!";
            loginPasswordWarning.innerHTML = "Invalid!! Please try again!";
            return false;
        }
        else {
            loginEmailWarning.innerHTML = "";
            loginPasswordWarning.innerHTML = "";
            window.location.href = './dashboard.html';
        }
    });
    currentUser.token = generateToken();
    console.log(currentUser);
    
    
    window.localStorage.setItem('currentUser', (JSON.stringify(currentUser)));
    
})
if(window.localStorage.getItem('currentUser')){
    window.location.href = '../shop/index.html';
}
function generateToken() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charsLength = chars.length;
    let randomStr = String(Math.random()).slice(2, 18);
    let token = "";
    randomStr.split("").forEach(digit => {
        token += chars.charAt(parseInt(digit, 10) % charsLength)
    });
    return token;
}