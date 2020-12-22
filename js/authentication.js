const buttonSignIn = document.getElementById("buttonSignIn");
const inputUsername = document.getElementById("userUsername");
const inputPassword = document.getElementById("userPassword");

buttonSignIn.onclick = function () {
    console.log(inputUsername.value);
    console.log(inputPassword.value);
};