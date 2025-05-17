import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";
import { app } from "./firebase-config.js";

const auth = getAuth(app);
const randomParagraphEl = document.getElementById("randomParagraph");
const logoutBtn = document.getElementById("logoutBtn");

const paragraphs = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio.",
  "Pellentesque habitant morbi tristique senectus et netus et malesuada fames.",
  "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit.",
  "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse."
];

// Show random paragraph
function showRandomParagraph() {
  const randIndex = Math.floor(Math.random() * paragraphs.length);
  randomParagraphEl.textContent = paragraphs[randIndex];
}

// Check if user is logged in
onAuthStateChanged(auth, (user) => {
  if (user) {
    showRandomParagraph();
  } else {
    window.location.href = "index.html";
  }
});

// Logout
logoutBtn.addEventListener("click", async () => {
  await signOut(auth);
  window.location.href = "index.html";
});
