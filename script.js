
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDdVkaoblui6CXZAUDeMJHItHe_MYpWM_I",
    authDomain: "signupform-html.firebaseapp.com",
    projectId: "signupform-html",
    storageBucket: "signupform-html.appspot.com",
    messagingSenderId: "93324160778",
    appId: "1:93324160778:web:2cc6376bcc9b0e29dc54f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()


var firstname = document.getElementById('firstname');
var lastname = document.getElementById('lastname');
var email = document.getElementById('email');
var password = document.getElementById('password');

window.signup = function (e) {
    e.preventDefault();

    var obj = {
        firstname: firstname.vale,
        lastname: lastname.value,
        email: email.value,
    }
    createUserWithEmailAndPassword(auth, obj.email.obj.password, obj.firstname, obj.lastname).then(function (success) {
        alert('Signup Successfully')
    }).catch(function (error) {
        alert('error' + error)
    })
}