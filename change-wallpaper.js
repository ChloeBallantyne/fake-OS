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
