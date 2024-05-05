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
