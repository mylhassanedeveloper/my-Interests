// Get the video
var video = document.getElementById("myVideo");

// Get the button
var btn = document.getElementById("mybtn");

// Pause and play the video, and change the button text
function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}
document.body.onkeyup = function(e) {
  if (e.keyCode == 32) {
    if (video.paused) {
      video.play();
      btn.innerHTML = "Pause";
    } else {
      video.pause();
      btn.innerHTML = "Play";
    }
  }
}