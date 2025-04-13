// Import Firebase dependencies
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdinVgk_hG0DOfdO58OGSUFWM-ggGo5t4",
  authDomain: "cafe-management-site.firebaseapp.com",
  projectId: "cafe-management-site",
  storageBucket: "cafe-management-site.firebasestorage.app",
  messagingSenderId: "778386354138",
  appId: "1:778386354138:web:cd0c98d3c4453aa0229ae3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

//inputs

document.querySelector(".submitbtn").addEventListener("click", function (e) {
  e.preventDefault();
  console.log("Work");

  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;
  let finalpass = document.querySelector("#passwordfinal").value;

  if (password !== finalpass) {
    alert("The Password and final password should be the same!");
    return;
  }
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      // ...
      alert("creatng accnt");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      alert("Error!");
      console.error("Firebase Error Code:", error.code);
      console.error("Firebase Error Message:", error.message);
      alert("Error: " + error.message); // 👈 show actual error
    });


});
