const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const mainPage = document.getElementById("mainPage");
const letterPage = document.getElementById("letterPage");
const typedText = document.getElementById("typedText");

noBtn.addEventListener("mouseenter", () => {

  noBtn.style.position = "fixed";   // only when moving

  const buttonWidth = noBtn.offsetWidth;
  const buttonHeight = noBtn.offsetHeight;

  const maxX = window.innerWidth - buttonWidth - 20;
  const maxY = window.innerHeight - buttonHeight - 20;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});

yesBtn.addEventListener("click", () => {
  mainPage.style.display = "none";
  letterPage.classList.remove("hidden");
  startTyping();
  startConfetti();
});

const message = `From the moment you walked into my life so unexpectedly, Mumu, everything changed in the most beautiful way. I never imagined I would fall so deeply in love with someone I hadn’t even met and yet, here we are luv

You are my happiness, my peace, and the safest place my heart has ever known mate!! 

Honestly, you’re exceptionally beautiful

You are my forever person, Shreya.

Nearly two years have passed since April 25, 2024, and not a single day has made my feelings weaker and I am endlessly grateful that you came into my life.

And no matter what happens, my heart will always choose you, MARRY ME SHREYA 💍❤️`;

let i = 0;

function startTyping() {
  const interval = setInterval(() => {
    typedText.innerHTML += message.charAt(i);
    i++;
    if (i >= message.length) clearInterval(interval);
  }, 25);
}

/* Confetti */
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

function startConfetti() {
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
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#ff4d6d";
  particles.forEach(p => {
    ctx.fillRect(p.x, p.y, p.size, p.size);
    p.y += p.speed;
    if (p.y > canvas.height) p.y = 0;
  });
  requestAnimationFrame(animate);
}