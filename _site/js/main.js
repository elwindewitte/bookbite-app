// AUTHENTICATION================ //

// Signin process
function authSignin() {
    // Defining variables
    var inputUsername = document.getElementById("userUsername");
    var inputPassword = document.getElementById("userPassword");
    var dataUsername = localStorage.getItem("username");
    var dataPassword = localStorage.getItem("password");
    var dataOnboardingDone = localStorage.getItem("onboardingDone");
    var errorMessage = document.getElementById('errorMessage');
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

    // When the password is incorrect
    } else if ((inputUsername.value == dataUsername) && !(inputPassword.value == dataPassword)) {
        errorMessage.classList.remove('hidden');
        errorMessage.classList.add('visible');
        errorMessage.innerHTML = 'Volgensmij klopt het wachtwoord niet. Probeer opnieuw.';

    // When the username is incorrect
    } else if (!(inputUsername.value == dataUsername) && !(inputPassword.value == dataPassword)) {
        errorMessage.classList.remove('hidden');
        errorMessage.classList.add('visible');
        errorMessage.innerHTML = 'Die gebruikersnaam kennen we niet. Maak een nieuw account aan.';
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

// Onboarding process
function finishOnboarding() {
    var path = window.location.protocol + '//' + window.location.host + '/';
    localStorage.setItem('onboardingDone', 'true');
    window.location.replace(path + 'home/');
};




// SETTINGS================ //

// Saves changes made to account inputs
function saveAccountSettings() {
    // Defining variables
    var inputName = document.getElementById("userName");
    var inputUsername = document.getElementById("userUsername");
    var inputPassword = document.getElementById("userPassword");
    var buttonSaveAccountSettings = document.getElementById('buttonSaveAccountSettings');

    // Saves it to local storage
    localStorage.setItem('name', inputName.value);
    localStorage.setItem('username', inputUsername.value);
    localStorage.setItem('password', inputPassword.value);

    // Changes the text
    buttonSaveAccountSettings.innerHTML = '<p>Opslaan...</p>';

    // Reload page
    setTimeout(function () {
        location.reload();
    }, 400);
};

// Saves changes made to reading inputs
function saveReadingSettings() {
    // Defining variables
    var inputReadingVolume = document.getElementById("readingVolume");
    var inputReadingTextSize = document.getElementById("readingTextSize");
    var buttonSaveReadingSettings = document.getElementById('buttonSaveReadingSettings');

    // Saves it to local storage
    localStorage.setItem('readingVolume', inputReadingVolume.value);
    localStorage.setItem('readingTextSize', inputReadingTextSize.value);
    
    // Changes the text
    buttonSaveReadingSettings.innerHTML = '<p>Opslaan...</p>';

    // Reloads page after 400ms
    setTimeout(function () {
        location.reload();
    }, 400);
};

// Signout process
function authSignout() {
    // Defining variables
    var path = window.location.protocol + '//' + window.location.host + '/';
    var buttonSignout = document.getElementById('buttonSignout');

    // Changes localstorage signin value
    localStorage.setItem('signinDone', 'false');

    // Changes the text
    buttonSignout.innerHTML = '<p>Uitloggen...</p>';

    // Redirects to root after 400ms
    setTimeout(function () {
        window.location.replace(path);
    }, 400);
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




// MUSIC================ //
var path = window.location.protocol + '//' + window.location.host + '/';
let songs = [path + 'assets/music/whatOnceWas_gavinLuke.mp3', path + 'assets/sheerWill_jonBjork.mp3'];
let audio = new Audio();
let currentSong = 0;
audio.src = songs[currentSong];

// Increases the music volume
function volumeUp() {
    audio.volume = parseInt(localStorage.getItem('readingVolume')) / 100;

    if (audio.volume < 1) {
        audio.volume += 0.1;
        var newVolume = audio.volume * 100;
        localStorage.setItem('readingVolume', newVolume);
        console.log('audio.volume: ' + audio.volume);
    };
};

// Decreases the music volume
function volumeDown() {
    audio.volume = parseInt(localStorage.getItem('readingVolume')) / 100;

    if (audio.volume > 0) {
        audio.volume -= 0.1;
        var newVolume = audio.volume * 100;
        localStorage.setItem('readingVolume', newVolume);
        console.log('audio.volume: ' + audio.volume);
    };
};

// Toggles the music
function toggleMusic() {
    var musicToggle = document.getElementById('musicToggle');
    var path = window.location.protocol + '//' + window.location.host + '/';

    if (audio.paused) {
        localStorage.setItem('music', 'playing');
        audio.play();
        musicToggle.innerHTML = '<img src="' + path + 'assets/icons/pause-16.svg">';
      } else {
        localStorage.setItem('music', 'paused')
        audio.pause();
        musicToggle.innerHTML = '<img src="' + path + 'assets/icons/play-16.svg">';
      }
};




// BOOK OVERLAY================ //
// Opens the book overlay
function openBookOverlay() {
    var bookOverlay = document.getElementById('bookOverlay');

    bookOverlay.classList.remove('passive');
    bookOverlay.classList.add('active');

    if (localStorage.getItem('music') == 'playing') {
        audio.play();
    } else if (localStorage.getItem('music') == 'paused') {
        audio.pause();
    } else {
        audio.play();
        localStorage.setItem('music', 'playing');
    };
};

// Closes the book overlay
function closeBookOverlay() {
    var bookOverlay = document.getElementById('bookOverlay');

    bookOverlay.classList.remove('active');
    bookOverlay.classList.add('passive');

    audio.pause();
};

// Sets the proper text size
function setTextSize() {
    console.log('Im triggered!');
    // var readingTextSize = localStorage.getItem('readingTextSize');
    // var bookOverlay = document.getElementById('bookOverlay');

    // if (readingTextSize == 'big') {
    //     bookOverlay.classList.remove('normal');
    //     bookOverlay.classList.add('big');
    // } else if (readingTextSize == 'medium') {
    //     // Absolutely nothing...
    // } else if (readingTextSize == 'small') {
    //     bookOverlay.classList.remove('normal');
    //     bookOverlay.classList.add('small');
    // };
};

// Adds a class to the book overlay to make the text smaller
function bookTextSmaller() {
    var bookOverlay = document.getElementById('bookOverlay');

    if (bookOverlay.classList.contains('big')) {
        bookOverlay.classList.remove('big');
        bookOverlay.classList.add('normal');
        localStorage.setItem('readingTextSize', 'normal');
    } else if (bookOverlay.classList.contains('normal')) {
        bookOverlay.classList.remove('normal');
        bookOverlay.classList.add('small');
        localStorage.setItem('readingTextSize', 'small');
    }
};

// Adds a class to the book overlay to make the text bigger
function bookTextBigger() {
    var bookOverlay = document.getElementById('bookOverlay');

    if (bookOverlay.classList.contains('small')) {
        bookOverlay.classList.remove('small');
        bookOverlay.classList.add('normal');
        localStorage.setItem('readingTextSize', 'normal');
    } else if (bookOverlay.classList.contains('normal')) {
        bookOverlay.classList.remove('normal');
        bookOverlay.classList.add('big');
        localStorage.setItem('readingTextSize', 'big');
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