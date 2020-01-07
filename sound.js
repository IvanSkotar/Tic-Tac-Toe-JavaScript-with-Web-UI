const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();
const click = new Audio('./sound/click.mp3');

const applause = new Audio('./sound/applause.mp3');
const reset = new Audio('./sound/reset.mp3');

function playClick() {
  click.currentTime = 0;
  click.play();
}

function playApplause() {
  applause.currentTime = 0;
  applause.play();
}

function playReset() {
  reset.currentTime = 0;
  reset.play();
}
