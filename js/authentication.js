window.onload = function () {
    // Defining variables
    var buttonSignIn = document.getElementById("buttonSignIn");
    var inputUsername = document.getElementById("userUsername");
    var inputPassword = document.getElementById("userPassword");
    var dataUsername = localStorage.getItem("username");
    var dataPassword = localStorage.getItem("password");
    var dataOnboardingDone = localStorage.getItem("onboardingDone");
    var path = window.location.protocol + '//' + window.location.host + '/';

    // Actual authentication, or simulation of at least
    buttonSignIn.onclick = function () {
        if ((inputUsername.value == dataUsername) && (inputPassword.value == dataPassword)) {
            localStorage.setItem("signinDone", "true");
            if (dataOnboardingDone == 'true') {
                // Redirect to home page when the onboarding is completed
                window.location.replace(path + 'home/');
            } else {
                // Redirect to onboarding when it hasn't been completed yet
                window.location.replace(path + 'onboarding/');
            };
        };
    };
};