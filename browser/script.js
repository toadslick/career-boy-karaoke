var FRAME_RATE = 30;

var runLoop = window.webvfx_add_to_frame[0];
var audio = document.getElementById("test-audio");

var animate = function (n) {
  runLoop(null, null, audio.currentTime * FRAME_RATE, FRAME_RATE);
  window.requestAnimationFrame(animate);
};
window.requestAnimationFrame(animate);

var togglePause = function () {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
};

window.addEventListener("keyup", function (event) {
  if (event.key === " ") {
    togglePause();
  }
});
