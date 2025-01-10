const dice = document.getElementById("dice");
const rollBtn = document.querySelector(".vista-button");

document.addEventListener("DOMContentLoaded", () => {
  rollBtn.addEventListener("click", () => {
    const randomX = Math.floor(Math.random() * 4) * 90;
    const randomY = Math.floor(Math.random() * 4) * 90;

    dice.style.transform = `rotateX(${randomX}deg) rotateY(${randomY}deg)`;
  });
});
