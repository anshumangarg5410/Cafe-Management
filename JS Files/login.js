// Import Firebase dependencies
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
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

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      // ...
      alert("Welcome User");
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      
        let message = "";
      
        if (errorCode === "auth/invalid-credential") {
          message = "Invalid email / password.. please try again (not again as password but again!!";
        } else if (errorCode === "auth/invalid-email") {
          message = "Invalid email format.";
        } else {
          message = errorMessage;
        }
        // Firebase: Error (auth/invalid-credential).
        alert(message);
        console.log(message);
        console.log(errorCode)
        e.preventDefault();
      });



});


// .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//     console.error("Firebase Error Message:", error.message);
//     alert("Error: " + error.message); // 👈 show actual error
    
//   });