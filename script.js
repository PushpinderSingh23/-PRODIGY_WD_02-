let startTime, interval;
let running = false;
let elapsed = 0;

const display = document.getElementById('display');
const laps = document.getElementById('laps');

document.getElementById('start').onclick = () => {
  if (!running) {
    startTime = Date.now() - elapsed;
    interval = setInterval(updateTime, 10);
    running = true;
  }
};

document.getElementById('pause').onclick = () => {
  if (running) {
    clearInterval(interval);
    elapsed = Date.now() - startTime;
    running = false;
  }
};

document.getElementById('reset').onclick = () => {
  clearInterval(interval);
  elapsed = 0;
  running = false;
  display.textContent = "00:00:00.000";
  laps.innerHTML = '';
};

document.getElementById('lap').onclick = () => {
  if (running) {
    const li = document.createElement('li');
    li.textContent = display.textContent;
    laps.appendChild(li);
  }
};

function updateTime() {
  elapsed = Date.now() - startTime;
  const time = new Date(elapsed);
  const hrs = String(time.getUTCHours()).padStart(2, '0');
  const mins = String(time.getUTCMinutes()).padStart(2, '0');
  const secs = String(time.getUTCSeconds()).padStart(2, '0');
  const ms = String(time.getUTCMilliseconds()).padStart(3, '0');
  display.textContent = `${hrs}:${mins}:${secs}.${ms}`;
}
