document.addEventListener("DOMContentLoaded", function () {
  const video = document.querySelector(".video-main");
  const playButton = document.querySelector(".video-main-play");

  setTimeout(function () {
    video.play();
    playButton.style.display = "none";
  }, 2000);

  playButton.addEventListener("click", function () {
    if (video.paused || video.ended) {
      video.play();
      playButton.style.display = "none";
    } else {
      video.pause();
      playButton.style.display = "block";
    }
  });

  video.addEventListener("click", function () {
    if (video.paused || video.ended) {
      video.play();
      playButton.style.display = "none";
    } else {
      video.pause();
      playButton.style.display = "block";
    }
  });

  video.addEventListener("ended", function () {
    video.currentTime = 0;
    video.play();
  });
});
