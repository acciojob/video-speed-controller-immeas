const video = document.getElementById('video');
const playPauseButton = document.getElementById('playPause');
const progress = document.getElementById('progress');
const progressFilled = document.getElementById('progress__filled');
const rewindButton = document.getElementById('rewind');
const fastForwardButton = document.getElementById('fastForward');
const volumeInput = document.getElementById('volume');
const playbackSpeedInput = document.getElementById('playbackSpeed');
const speedValue = document.getElementById('speedValue');

// Play/Pause button functionality
playPauseButton.addEventListener('click', () => {
  if (video.paused) {
    video.play();
    playPauseButton.textContent = '❚ ❚';
  } else {
    video.pause();
    playPauseButton.textContent = '►';
  }
});

// Update progress bar as video plays
video.addEventListener('timeupdate', () => {
  const progressPercent = (video.currentTime / video.duration) * 100;
  progress.value = progressPercent;
  progressFilled.style.width = `${progressPercent}%`;
});

// Change progress when clicked
progress.addEventListener('input', () => {
  const newTime = (progress.value / 100) * video.duration;
  video.currentTime = newTime;
});

// Rewind video by 10 seconds
rewindButton.addEventListener('click', () => {
  video.currentTime -= 10;
});

// Fast forward video by 25 seconds
fastForwardButton.addEventListener('click', () => {
  video.currentTime += 25;
});

// Volume control
volumeInput.addEventListener('input', () => {
  video.volume = volumeInput.value / 100;
});

// Playback speed control
playbackSpeedInput.addEventListener('input', () => {
  video.playbackRate = playbackSpeedInput.value;
  speedValue.textContent = `${playbackSpeedInput.value}×`;
});
