<script type="module">
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "ISI_PUNYA_KAMU",
  authDomain: "ISI_PUNYA_KAMU",
  projectId: "ISI_PUNYA_KAMU",
  appId: "ISI_PUNYA_KAMU"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// REGISTER
document.getElementById("registerForm").addEventListener("submit", function(e){
  e.preventDefault();

  const email = document.getElementById("regEmail").value;
  const password = document.getElementById("regPassword").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Registrasi berhasil!");
      window.location.href = "login.html";
    })
    .catch((error) => {
      alert(error.message);
    });
});

// LOGIN
document.getElementById("loginForm").addEventListener("submit", function(e){
  e.preventDefault();

  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Login berhasil!");
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      alert(error.message);
    });
});
</script>

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1_l-DiK4UgC1nvIpCkJJUCDLXTu3IWug",
  authDomain: "huatshop-909d3.firebaseapp.com",
  projectId: "huatshop-909d3",
  storageBucket: "huatshop-909d3.firebasestorage.app",
  messagingSenderId: "286540218884",
  appId: "1:286540218884:web:84937cef18f19322186b51",
  measurementId: "G-BQ0PNRKHYW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);