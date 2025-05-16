import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";
import { app } from "./firebase-config.js";

const auth = getAuth(app);

const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const loginError = document.getElementById("loginError");
const registerError = document.getElementById("registerError");

document.getElementById("showRegister").addEventListener("click", (e) => {
  e.preventDefault();
  loginForm.style.display = "none";
  registerForm.style.display = "block";
  loginError.textContent = "";
  registerError.textContent = "";
});

document.getElementById("showLogin").addEventListener("click", (e) => {
  e.preventDefault();
  registerForm.style.display = "none";
  loginForm.style.display = "block";
  loginError.textContent = "";
  registerError.textContent = "";
});

// Login Handler
loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  loginError.textContent = "";
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    alert(`Welcome back, ${userCredential.user.email}!`);
    // Redirect or update UI
  } catch (error) {
    loginError.textContent = error.message;
  }
});

// Register Handler
registerForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  registerError.textContent = "";
  const email = document.getElementById("registerEmail").value;
  const password = document.getElementById("registerPassword").value;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    alert(`Registration successful! Welcome, ${userCredential.user.email}!`);
    // Optionally, switch to login or dashboard
    registerForm.style.display = "none";
    loginForm.style.display = "block";
  } catch (error) {
    registerError.textContent = error.message;
  }
});
