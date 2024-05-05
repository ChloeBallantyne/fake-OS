const startButton = document.getElementById("startBtn");
const startMenu = document.getElementById("menu");

startButton.addEventListener("click", () => {
  startMenu.classList.toggle("menu__clicked");
  startButton.classList.toggle("start__clicked");
});

const modalOne = document.getElementById("modalOne");
const modalOneBtn = document.getElementById("modalOneBtn");
const modalOneCloseBtn = document.getElementsByClassName("close")[0];

modalOneBtn.onclick = function () {
  modalOne.style.display = "block";
};

modalOneCloseBtn.onclick = function () {
  modalOne.style.display = "none";
};

const modalTwo = document.getElementById("modalTwo");
const modalTwoBtn = document.getElementById("modalTwoBtn");
const modalTwoCloseBtn = document.getElementsByClassName("close")[1];

modalTwoBtn.onclick = function () {
  modalTwo.style.display = "block";
};

modalTwoCloseBtn.onclick = function () {
  modalTwo.style.display = "none";
};

const modalThree = document.getElementById("modalThree");
const modalThreeBtn = document.getElementById("modalThreeBtn");
const modalThreeCloseBtn = document.getElementsByClassName("close")[2];

modalThreeBtn.onclick = function () {
  modalThree.style.display = "block";
};

modalThreeCloseBtn.onclick = function () {
  modalThree.style.display = "none";
};
