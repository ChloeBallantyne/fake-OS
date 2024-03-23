const startButton = document.getElementById("startBtn");
const startMenu = document.getElementById("menu");

startButton.addEventListener("click", () => {
  startMenu.classList.toggle("menu__clicked");
  startButton.classList.toggle("start__clicked");
});

function updateTime() {
  let timestamp_UTC = new Date();
  let readable_timestamp_AEST =
    timestamp_UTC
      .toLocaleDateString("en-AU", { timeZone: "Australia/Sydney" })
      .replace(/\//g, "-") +
    " " +
    timestamp_UTC.toLocaleTimeString("en-AU", { timeZone: "Australia/Sydney" });
  document.getElementById("time").innerText = readable_timestamp_AEST;
}

setInterval(updateTime, 1000);

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

const list = document.getElementById("list");

list.onclick = function (e) {
  e.preventDefault();
  let elm = e.target;
  let audio = document.getElementById("audio");
  let source = document.getElementById("audioSource");
  source.src = elm.getAttribute("data-value");
  let songsList = document.getElementsByClassName("song");
  for (let i = 0; i < songsList.length; i++) {
    if (songsList[i].classList.contains("song__selected")) {
      songsList[i].classList.remove("song__selected");
    }
  }
  elm.classList.add("song__selected");
  audio.load();
  audio.play();
};

const form = document.querySelector("form");
const inputOne = document.getElementById("inputOne");
const inputTwo = document.getElementById("inputTwo");
const operator = document.getElementById("operator");
const resultArea = document.getElementById("resultArea");

const calculate = (x, y, op) => {
  if (op === "+") {
    return x + y;
  } else if (op === "-") {
    return x - y;
  } else if (op === "*") {
    return x * y;
  } else {
    return x / y;
  }
};

const createElementWithText = (elType, text, parentNode) => {
  const newEl = document.createElement(elType);
  const elText = document.createTextNode(text);
  newEl.appendChild(elText);
  parentNode.appendChild(newEl);
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  console.log(inputOne.value, inputTwo.value, operator.value);

  let resultData = calculate(
    Number(inputOne.value),
    Number(inputTwo.value),
    operator.value
  );

  console.log(resultData);

  createElementWithText("p", resultData, resultArea);

  inputOne.value = "";
  inputTwo.value = "";
});

const change1 = document.getElementById("wallpaper1Btn");
const change2 = document.getElementById("wallpaper2Btn");
const change3 = document.getElementById("wallpaper3Btn");

change1.onclick = function (e) {
  e.preventDefault();
  document.body.style.backgroundImage = "url(./assets/wallpaper1.jpeg)";
};

change2.onclick = function (e) {
  e.preventDefault();
  document.body.style.backgroundImage = "url(./assets/wallpaper2.png)";
};

change3.onclick = function (e) {
  e.preventDefault();
  document.body.style.backgroundImage = "url(./assets/wallpaper3.jpg)";
};
