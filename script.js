// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailPassword, onAuthStateChanged, signOut as firebaseSignOut } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBMenG6Vqk9Hpjuu-dWg9FmMRndJ1CE1n4",
    authDomain: "signupwithfirebasejs.firebaseapp.com",
    projectId: "signupwithfirebasejs",
    storageBucket: "signupwithfirebasejs.appspot.com",
    messagingSenderId: "270516327982",
    appId: "1:270516327982:web:d81983f6a0385837f031bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const email = document.getElementById('email');
const password = document.getElementById('password');
const signup = document.getElementById('signup');
const authPart = document.getElementById('authPart');
const signOutButton = document.getElementById('signOutButton');

authPart.style.display = 'none';

const signUp = async () => {
    const signUpEmail = email.value;
    const signUpPassword = password.value;
    createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword).then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        alert("well done");
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        alert("try again");
    });
};

signup.addEventListener('click', signUp);
signUpBtn.addEventListener('click', signUp);

//boit