import { Notify } from 'notiflix';

import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from 'firebase/database';
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { Notify } from 'notiflix';

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
    console.log('click');
    openLoginModalBtn.classList.toggle('is-hidden');
  }
});

closeLoginModalBtn.addEventListener('click', e => {
  openLoginModalBtn.classList.toggle('is-hidden');
  if (e.target == e.currentTarget) {
    console.log('click');
    openSignUpModalBtn.classList.toggle('is-hidden');
  }
});

// SignUpModal
const openSignUpModalBtn = document.querySelector('[data-modal-open-signup]');
const closeSignUpModalBtn = document.querySelector('[data-modal-close-signup]');
openSignUpModalBtn.addEventListener('click', e => {
  if (e.target == e.currentTarget) {
    console.log('click');
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
openAuthBox.addEventListener('click', () => {
  AuthBox.classList.toggle('is-hidden');
  signUpBtn.style.display = 'block';
  loginBtn.style.display = 'block';
});

const loginBtn = document.querySelector('.login__button');
loginBtn.addEventListener('click', () => {
  loginForm.classList.toggle('is-hidden');
  loginForm.style.display = 'flex';
  openLoginModalBtn.classList.toggle('is-hidden');
});

const signUpBtn = document.querySelector('.sign-up__button');
signUpBtn.addEventListener('click', () => {
  singUpForm.style.display = 'flex';
  openSignUpModalBtn.classList.toggle('is-hidden');
});

// Registration

const singUpForm = document.querySelector('.sing-up__form');
singUpForm.addEventListener('submit', onSingUpFormSubmit);

function onSingUpFormSubmit(event) {
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
        Notify.success(`Welcome to Filmoteka, ${username}`);
        set(ref(database, 'users/' + user.uid), {
          username,
          email,
          password,
        });
      })
      .catch(error => {
        const errorMessage = error.message;
        Notify.failure(errorMessage);
      });

    document.querySelector('.sing-up-form').reset();
  }
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

        set(ref(database, 'users/' + user.uid), {
          email,
          password,
        });
        Notify.success(`Hello`);
      })
      .catch(error => {
        const errorMessage = error.message;
        Notify.failure(errorMessage);
      });

    document.querySelector('.login-form').reset();
  }
}

// LogOut
const logoutBtn = document.querySelector('.logout');
logoutBtn.addEventListener('click', onLogout);
function onLogout(event) {
  signOut(auth)
    .then(() => {
      signUpBtn.style.display = 'none';
      loginBtn.style.display = 'none';
      Notify.info(`Bye, see you later`);
      AuthBox.classList.add('is-hidden');
    })
    .catch(error => {
      const errorMessage = error.message;
      Notify.failure(errorMessage);
    });
}

// AuthState

onAuthStateChanged(auth, user => {
  if (user) {
    openLoginModalBtn.classList.add('is-hidden');
    openSignUpModalBtn.classList.add('is-hidden');
    openAuthBox.style.display = 'none';
    loginForm.style.display = 'none';
    singUpForm.style.display = 'none';
    signUpBtn.style.display = 'none';
    loginBtn.style.display = 'none';
    logoutBtn.style.display = 'block';
    userName.style.display = 'flex';
    console.log('on');
  } else {
    openAuthBox.style.display = 'flex';
    userName.style.display = 'none';
    signUpBtn.style.display = 'block';
    loginBtn.style.display = 'block';
    logoutBtn.style.display = 'none';
  }
});
