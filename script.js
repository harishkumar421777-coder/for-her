/* ========================= */
/* DOM ELEMENTS */
/* ========================= */

const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const mainPage = document.getElementById("mainPage");
const letterPage = document.getElementById("letterPage");
const typedText = document.getElementById("typedText");

const angryPopup = document.getElementById("angryPopup");
const flowerScreen = document.getElementById("flowerScreen");
const flowerBloom = document.getElementById("flowerBloom");
const bgMusic = document.getElementById("bgMusic");

/* ========================= */
/* FORCE SAFE INITIAL STATE */
/* ========================= */

console.log("JS Loaded");

if (mainPage) mainPage.style.display = "block";
if (flowerScreen) flowerScreen.classList.add("hidden");
if (angryPopup) angryPopup.classList.add("hidden");

/* ========================= */
/* STORY QUESTIONS */
/* ========================= */

const questions = [
  "Do you really know what you’re choosing luv? ❤️",
  "Are you confident about how much you love Bubu? ",
  "Does Bubu love you more than you love him? 💕",
  "Be honest… you don’t love Bubu more, do you?"
];

let currentStep = 0;

/* ========================= */
/* NO BUTTON DODGE (ONLY FIRST QUESTION) */
/* ========================= */

if (noBtn) {
  noBtn.addEventListener("mouseenter", () => {

    if (currentStep !== 0) return;

    noBtn.style.position = "fixed";

    const buttonWidth = noBtn.offsetWidth;
    const buttonHeight = noBtn.offsetHeight;

    const maxX = window.innerWidth - buttonWidth - 20;
    const maxY = window.innerHeight - buttonHeight - 20;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
  });
}

/* ========================= */
/* YES BUTTON FLOW */
/* ========================= */

if (yesBtn) {
  yesBtn.addEventListener("click", () => {

    currentStep++;

    // More questions remaining
    if (currentStep < questions.length) {

      const titleElement = document.querySelector(".title");
      if (titleElement) {
        titleElement.innerText = questions[currentStep];
      }

      // Reset No button back to normal position
      if (noBtn) {
        noBtn.style.position = "relative";
        noBtn.style.left = "0px";
        noBtn.style.top = "0px";
      }

    } else {

      // Hide question page
      if (mainPage) mainPage.style.display = "none";

      // Show flower screen
      if (flowerScreen) flowerScreen.classList.remove("hidden");
    }
  });
}

/* ========================= */
/* NO BUTTON CLICK (AFTER FIRST QUESTION) */
/* ========================= */

if (noBtn) {
  noBtn.addEventListener("click", () => {

    if (currentStep === 0) return;

    if (!angryPopup) return;

    angryPopup.classList.remove("hidden");
    angryPopup.classList.add("show");

    setTimeout(() => {
      angryPopup.classList.remove("show");
      setTimeout(() => {
        angryPopup.classList.add("hidden");
      }, 300);
    }, 1200);
  });
}

/* ========================= */
/* FLOWER CLICK */
/* ========================= */

if (flowerBloom) {
  flowerBloom.addEventListener("click", () => {

    if (flowerScreen) flowerScreen.classList.add("hidden");
    if (letterPage) letterPage.classList.remove("hidden");

    startTyping();
    startConfetti();

    if (bgMusic) {
      bgMusic.volume = 0.5;
      bgMusic.play().catch(() => {});
    }
  });
}

/* ========================= */
/* TYPING EFFECT */
/* ========================= */

const message = `From the moment you walked into my life so unexpectedly, Mumu, everything changed in the most beautiful way. I never imagined I would fall so deeply in love with someone I hadn’t even met and yet, here we are luv

You are my happiness, my peace, and the safest place my heart has ever known mate!! 

Honestly, you’re exceptionally beautiful

You are my forever person, Shreya.

Nearly two years have passed since April 25, 2024, and not a single day has made my feelings weaker and I am endlessly grateful that you came into my life.

And no matter what happens, my heart will always choose you, MARRY ME SHREYA 💍❤️`;

let i = 0;

function startTyping() {
  if (!typedText) return;

  typedText.innerHTML = "";
  i = 0;

  const interval = setInterval(() => {
    typedText.innerHTML += message.charAt(i);
    i++;
    if (i >= message.length) clearInterval(interval);
  }, 25);
}

/* ========================= */
/* CONFETTI */
/* ========================= */

const canvas = document.getElementById("confetti");
let ctx = null;
let particles = [];

if (canvas) {
  ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function startConfetti() {

  if (!ctx) return;

  particles = [];

  for (let i = 0; i < 120; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 6 + 2,
      speed: Math.random() * 3 + 2
    });
  }

  animate();
}

function animate() {

  if (!ctx) return;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#ff4d6d";

  particles.forEach(p => {
    ctx.fillRect(p.x, p.y, p.size, p.size);
    p.y += p.speed;
    if (p.y > canvas.height) p.y = 0;
  });

  requestAnimationFrame(animate);
}
