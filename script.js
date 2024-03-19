//select the btn
const startButton = document.getElementById("startBtn");
const startMenu = document.getElementById("menu");

//event listeneer
startButton.addEventListener("click", () => {
  startMenu.classList.toggle("menu__clicked");
  startButton.classList.toggle("start__clicked");
});
