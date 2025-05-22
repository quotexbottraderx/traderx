let timer = 60;
let interval;
let canSignal = true;

const getSignalBtn = document.getElementById('getSignal');
const timerDisplay = document.getElementById('timer');
const directionDisplay = document.getElementById('direction');

function getSignal() {
  if (!canSignal) return;

  canSignal = false;
  getSignalBtn.disabled = true;

  // Randomly choose direction
  const direction = Math.random() > 0.5 ? '⬆' : '⬇';
  directionDisplay.textContent = direction;

  timer = 60;
  timerDisplay.textContent = `Time: ${timer} seconds`;

  interval = setInterval(() => {
    timer--;
    timerDisplay.textContent = `Time: ${timer} seconds`;

    if (timer === 0) {
      clearInterval(interval);
      canSignal = true;
      getSignalBtn.disabled = false;
      directionDisplay.textContent = '⬇'; // reset or blank
    }
  }, 1000);
}

getSignalBtn.addEventListener('click', getSignal);
