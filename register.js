import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";
import { app } from "./firebase-config.js";

const auth = getAuth(app);
const registerForm = document.getElementById("registerForm");
const registerError = document.getElementById("registerError");

registerForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  registerError.textContent = "";

  const email = document.getElementById("registerEmail").value;
  const password = document.getElementById("registerPassword").value;

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    alert("Registration successful! Please log in.");
    window.location.href = "index.html";
  } catch (error) {
    registerError.textContent = `Error: ${error.message}`;
  }
});
