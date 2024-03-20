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

setInterval(updateTime, 1000); // Run updateTime() every second

const modalOne = document.getElementById("modalOne");
const modalBtn = document.getElementById("modalOneBtn");
const modalOneCloseBtn = document.getElementsByClassName("close")[0];

modalBtn.onclick = function () {
  modalOne.style.display = "block";
};

modalOneCloseBtn.onclick = function () {
  modalOne.style.display = "none";
};
