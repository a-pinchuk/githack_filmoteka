import { Notify } from 'notiflix';

// Firebase
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from 'firebase/database';
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBSxHMpTM9zFqKEQxKrDCL--X3YmGwmeVA',
  authDomain: 'githack-filmoteka-goit.firebaseapp.com',
  databaseURL: 'https://githack-filmoteka-goit-default-rtdb.firebaseio.com',
  projectId: 'githack-filmoteka-goit',
  storageBucket: 'githack-filmoteka-goit.appspot.com',
  messagingSenderId: '584853276392',
  appId: '1:584853276392:web:dfdbb6ca4785da7081ab5d',
  measurementId: 'G-J022TPQ7DN',
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();

// Login Modal
const openLoginModalBtn = document.querySelector('[data-modal-open-login]');
const closeLoginModalBtn = document.querySelector('[data-modal-close-login]');

openLoginModalBtn.addEventListener('click', e => {
  if (e.target == e.currentTarget) {
    openLoginModalBtn.classList.toggle('is-hidden');
  }
});

closeLoginModalBtn.addEventListener('click', e => {
  openLoginModalBtn.classList.toggle('is-hidden');
  if (e.target == e.currentTarget) {
    openSignUpModalBtn.classList.toggle('is-hidden');
  }
});

// SignUpModal
const openSignUpModalBtn = document.querySelector('[data-modal-open-signup]');
const closeSignUpModalBtn = document.querySelector('[data-modal-close-signup]');
openSignUpModalBtn.addEventListener('click', e => {
  if (e.target == e.currentTarget) {
    openSignUpModalBtn.classList.toggle('is-hidden');
  }
});

closeSignUpModalBtn.addEventListener('click', () => {
  openSignUpModalBtn.classList.toggle('is-hidden');
});

// Header Btn
const AuthBox = document.querySelector('[data-modal-open-auth-box]');
const userName = document.querySelector('.user-name');

const openAuthBox = document.querySelector('[open-auth-box]');

if (openAuthBox) {
  openAuthBox.addEventListener('click', () => {
    AuthBox.classList.toggle('is-hidden');
    signUpBtn.style.display = 'block';
    loginBtn.style.display = 'block';
  });
}

const loginBtn = document.querySelector('.login__button');
if (loginBtn) {
  loginBtn.addEventListener('click', () => {
    // loginForm.classList.remove('is-hidden');
    loginForm.style.display = 'flex';
    openLoginModalBtn.classList.toggle('is-hidden');
  });
}

const signUpBtn = document.querySelector('.sign-up__button');

if (signUpBtn) {
  signUpBtn.addEventListener('click', () => {
    signUpForm.style.display = 'flex';
    openSignUpModalBtn.classList.toggle('is-hidden');
  });
}

// Registration

const signUpForm = document.querySelector('.sign-up__form');
signUpForm.addEventListener('submit', onSignUpFormSubmit);

function onSignUpFormSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  const username = formElements.username.value.trim();
  const email = formElements.email.value.trim();
  const password = formElements.password.value.trim();

  if (email.length === 0 || password.length === 0) {
    Notify.info(`Please write all fields`);
  } else {
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const user = userCredential.user;
        userName.style.display = 'block';
        userName.textContent = username;
        Notify.success(`Welcome to Filmoteka, ${username}`);
        set(ref(database, 'users/' + user.uid), {
          username,
          email,
        });
        updateProfile(auth.currentUser, {
          displayName: username,
        })
          .then(() => {
            console.log('Profile updated!');
          })
          .catch(error => {
            console.log(error);
          });
      })
      .catch(error => {
        const errorMessage = error.message;
        Notify.failure(errorMessage);
      });
  }
  signUpForm.reset();
}

// Login
const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', onLoginFormSubmit);

function onLoginFormSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  const email = formElements.email.value.trim();
  const password = formElements.password.value.trim();

  if (email.length === 0 || password.length === 0) {
    Notify.info(`Please write all fields`);
  } else {
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const user = userCredential.user;
        openAuthBox.style.display = 'none';
        set(ref(database, 'users/' + user.uid), {
          email,
          password,
        });
      })
      .catch(error => {
        const errorMessage = error.message;
        Notify.failure(errorMessage);
      });
  }
  loginForm.reset();
}

// LogOut

const logoutBtn = document.querySelector('.logout');

if (logoutBtn) {
  logoutBtn.addEventListener('click', onLogout);
  function onLogout(event) {
    signOut(auth)
      .then(() => {
        signUpBtn.style.display = 'none';
        loginBtn.style.display = 'none';
        Notify.info(`Bye, see you later`);
        AuthBox.classList.add('is-hidden');
        window.location.href = 'index.html';
      })
      .catch(error => {
        const errorMessage = error.message;
        Notify.failure(errorMessage);
      });
  }
}

// AuthState

const openLibraryPage = document.querySelector('[open-library-page]');

if (openLibraryPage) {
  onAuthStateChanged(auth, user => {
    if (user) {
      openLibraryPage.addEventListener('click', e => {
        window.location.href = 'my-library.html';
      });
    } else {
      openLibraryPage.addEventListener('click', e => {
        e.preventDefault();
        Notify.info('You must be logged in to access this page.');
      });
    }
  });
}

// Library page
const logoutLibraryBtn = document.querySelector('.header-library__logout-btn');
const userNameLibrary = document.querySelector('.header-library__user-name');

if (logoutLibraryBtn) {
  logoutLibraryBtn.addEventListener('click', onLogout);

  function onLogout(e) {
    signOut(auth)
      .then(() => {
        window.location.href = 'index.html';
      })
      .catch(error => {
        const errorMessage = error.message;
        Notify.failure(errorMessage);
      });
  }
}

if (openLibraryPage) {
  onAuthStateChanged(auth, user => {
    if (user) {
      openLoginModalBtn.classList.add('is-hidden');
      openSignUpModalBtn.classList.add('is-hidden');
      openAuthBox.style.display = 'none';
      loginForm.style.display = 'none';
      signUpForm.style.display = 'none';
      signUpBtn.style.display = 'none';
      loginBtn.style.display = 'none';
      logoutBtn.style.display = 'block';
      userName.style.display = 'block';
      userName.textContent = user.displayName;
    } else {
      openAuthBox.style.display = 'flex';
      userName.style.display = 'none';
      signUpBtn.style.display = 'block';
      loginBtn.style.display = 'block';
      logoutBtn.style.display = 'none';
    }
  });
}

if (userNameLibrary) {
  onAuthStateChanged(auth, user => {
    if (user) {
      userNameLibrary.style.display = 'block';
      userNameLibrary.textContent = user.displayName;
    } else {
    }
  });
}

// Show password

const showLoginPassBtn = document.querySelector('.login-form_pass-icon-hide');
const loginPassInput = document.querySelector('.login-form_pass-input');
showLoginPassBtn.addEventListener('click', e => {
  showLoginPassBtn.classList.toggle('show');
  if (showLoginPassBtn.classList.contains('show')) {
    loginPassInput.type = 'text';
  } else {
    loginPassInput.type = 'password';
  }
});

const showSignUpPassBtn = document.querySelector(
  '.sign-up-form_pass-icon-hide'
);
const signUpPassInput = document.querySelector('.sign-up-form_pass-input');
showSignUpPassBtn.addEventListener('click', e => {
  showSignUpPassBtn.classList.toggle('show');
  if (showSignUpPassBtn.classList.contains('show')) {
    signUpPassInput.type = 'text';
  } else {
    signUpPassInput.type = 'password';
  }
});
