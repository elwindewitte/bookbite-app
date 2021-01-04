// AUTHENTICATION================ //

// Signin process
function authSignin() {
    // Defining variables
    var inputUsername = document.getElementById("userUsername");
    var inputPassword = document.getElementById("userPassword");
    var dataUsername = localStorage.getItem("username");
    var dataPassword = localStorage.getItem("password");
    var dataOnboardingDone = localStorage.getItem("onboardingDone");
    var path = window.location.protocol + '//' + window.location.host + '/';

    // Actual authentication, or simulation of at least
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

// Signup process
function authSignup() {
    // Defining variables
    var inputName = document.getElementById("userName");
    var inputUsername = document.getElementById("userUsername");
    var inputPassword = document.getElementById("userPassword");
    var path = window.location.protocol + '//' + window.location.host + '/';

    // Saving data to local storage
    localStorage.setItem('name', inputName.value);
    localStorage.setItem('username', inputUsername.value);
    localStorage.setItem('password', inputPassword.value);
    localStorage.setItem('signinDone', 'true');

    // Redirecting to onboarding
    window.location.replace(path + 'onboarding/');
};




// AUTHENTICATION================ //

// Saves changes made to account inputs
function saveAccountSettings() {
    // Defining variables
    var inputName = document.getElementById("userName");
    var inputUsername = document.getElementById("userUsername");
    var inputPassword = document.getElementById("userPassword");

    // Saves it to local storage
    localStorage.setItem('name', inputName.value);
    localStorage.setItem('username', inputUsername.value);
    localStorage.setItem('password', inputPassword.value);
};

// Signout process
function authSignout() {
    // Defining variables
    var path = window.location.protocol + '//' + window.location.host + '/';

    // Changes localstorage signin value
    localStorage.setItem('signinDone', 'false');

    // Redirects to root
    window.location.replace(path);
};

// Delete all localstorage data
function deleteData() {
    // Defining variables
    var path = window.location.protocol + '//' + window.location.host + '/';

    // Wipes all localstorage data
    localStorage.clear();

    // Redirects to root
    window.location.replace(path);
};




// BOOK OVERLAY================ //
// Opens the book overlay
function openBookOverlay() {
    var bookOverlay = document.getElementById('bookOverlay');

    bookOverlay.classList.remove('passive');
    bookOverlay.classList.add('active');
};

// Closes the book overlay
function closeBookOverlay() {
    var bookOverlay = document.getElementById('bookOverlay');

    bookOverlay.classList.remove('active');
    bookOverlay.classList.add('passive');
};

// Adds a class to the book overlay to make the text smaller
function bookTextSmaller() {
    var bookOverlay = document.getElementById('bookOverlay');

    if (bookOverlay.classList.contains('big')) {
        bookOverlay.classList.remove('big');
        bookOverlay.classList.add('normal');
    } else if (bookOverlay.classList.contains('normal')) {
        bookOverlay.classList.remove('normal');
        bookOverlay.classList.add('small');
    }
};

// Adds a class to the book overlay to make the text bigger
function bookTextBigger() {
    var bookOverlay = document.getElementById('bookOverlay');

    if (bookOverlay.classList.contains('small')) {
        bookOverlay.classList.remove('small');
        bookOverlay.classList.add('normal');
    } else if (bookOverlay.classList.contains('normal')) {
        bookOverlay.classList.remove('normal');
        bookOverlay.classList.add('big');
    }
};




// MODALS================ //
// Closes the modal
function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.classList.add('hidden');
    modal.classList.remove('visible');
};

// Opens the modal
function openModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.classList.add('visible');
    modal.classList.remove('hidden');
};