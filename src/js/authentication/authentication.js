// import { Notify } from 'notiflix';

// import { initializeApp } from 'firebase/app';
// import { getDatabase, ref, set } from 'firebase/database';
// import {
//   getAuth,
//   signInWithEmailAndPassword,
//   onAuthStateChanged,
//   signOut,
//   createUserWithEmailAndPassword,
// } from 'firebase/auth';
// import { Notify } from 'notiflix';

// const firebaseConfig = {
//   apiKey: 'AIzaSyBSxHMpTM9zFqKEQxKrDCL--X3YmGwmeVA',
//   authDomain: 'githack-filmoteka-goit.firebaseapp.com',
//   databaseURL: 'https://githack-filmoteka-goit-default-rtdb.firebaseio.com',
//   projectId: 'githack-filmoteka-goit',
//   storageBucket: 'githack-filmoteka-goit.appspot.com',
//   messagingSenderId: '584853276392',
//   appId: '1:584853276392:web:dfdbb6ca4785da7081ab5d',
//   measurementId: 'G-J022TPQ7DN',
// };

// const app = initializeApp(firebaseConfig);
// const database = getDatabase(app);
// const auth = getAuth();

// // Login Modal
// const openLoginModalBtn = document.querySelector('[data-modal-open-login]');
// const closeLoginModalBtn = document.querySelector('[data-modal-close-login]');
// closeLoginModalBtn.addEventListener('click', () => {
//   openLoginModalBtn.classList.toggle('is-hidden');
// });

// // SignUpModal
// const openSignUpModalBtn = document.querySelector('[data-modal-open-signup]');
// const closeSignUpModalBtn = document.querySelector('[data-modal-close-signup]');

// closeSignUpModalBtn.addEventListener('click', () => {
//   openSignUpModalBtn.classList.toggle('is-hidden');
// });

// // Header Btn
// const userName = document.querySelector('.user-name');

// const loginBtn = document.querySelector('.login__button');
// loginBtn.addEventListener('click', () => {
//   loginForm.classList.toggle('is-hidden');
//   loginForm.style.display = 'block';
//   openLoginModalBtn.classList.toggle('is-hidden');
// });

// const signUpBtn = document.querySelector('.sign-up__button');
// signUpBtn.addEventListener('click', () => {
//   singUpForm.style.display = 'block';
//   openSignUpModalBtn.classList.toggle('is-hidden');
// });

// // Registration

// const singUpForm = document.querySelector('.sing-up-form');
// singUpForm.addEventListener('submit', onSingUpFormSubmit);

// function onSingUpFormSubmit(event) {
//   event.preventDefault();
//   const formElements = event.currentTarget.elements;
//   const name = formElements.name.value.trim();
//   const email = formElements.email.value.trim();
//   const password = formElements.password.value.trim();

//   if (email.length === 0 || password.length === 0) {
//     Notify.info(`Please write all fields`);
//   } else {
//     createUserWithEmailAndPassword(auth, email, password)
//       .then(userCredential => {
//         const user = userCredential.user;
//         Notify.success(`Welcome to Filmoteka, ${name}`);
//         set(ref(database, 'users/' + user.uid), {
//           username: name,
//           email: email,
//           password: password,
//         });
//       })
//       .catch(error => {
//         const errorMessage = error.message;
//         Notify.failure(errorMessage);
//         // ..
//       });

//     document.querySelector('.sing-up-form').reset();
//   }
// }

// // Login
// const loginForm = document.querySelector('.login-form');
// loginForm.addEventListener('submit', onLoginFormSubmit);

// function onLoginFormSubmit(event) {
//   event.preventDefault();

//   const formElements = event.currentTarget.elements;
//   const email = formElements.email.value.trim();
//   const password = formElements.password.value.trim();

//   if (email.length === 0 || password.length === 0) {
//     Notify.info(`Please write all fields`);
//   } else {
//     signInWithEmailAndPassword(auth, email, password)
//       .then(userCredential => {
//         const user = userCredential.user;
//         set(ref(database, 'users/' + user.uid), {
//           email: email,
//           password: password,
//         });
//         Notify.success(`Hello`);
//       })
//       .catch(error => {
//         const errorMessage = error.message;
//         Notify.failure(errorMessage);
//       });

//     document.querySelector('.login-form').reset();
//   }
// }

// // LogOut
// const logoutBtn = document.querySelector('.logout');
// logoutBtn.addEventListener('click', onLogout);

// function onLogout(event) {
//   signOut(auth)
//     .then(() => {
//       Notify.info(`Good bay, see you later`);
//     })
//     .catch(error => {
//       const errorMessage = error.message;
//       Notify.failure(errorMessage);
//     });
// }

// // AuthState

// onAuthStateChanged(auth, user => {
//   if (user) {
//     openLoginModalBtn.classList.add('is-hidden');
//     openSignUpModalBtn.classList.add('is-hidden');
//     loginForm.style.display = 'none';
//     singUpForm.style.display = 'none';
//     signUpBtn.style.display = 'none';
//     loginBtn.style.display = 'none';
//     logoutBtn.style.display = 'block';
//     userName.style.display = 'block';

//     console.log('on');
//   } else {
//     userName.style.display = 'none';
//     signUpBtn.style.display = 'block';
//     loginBtn.style.display = 'block';
//     logoutBtn.style.display = 'none';

//     console.log('off');
//   }
// });
