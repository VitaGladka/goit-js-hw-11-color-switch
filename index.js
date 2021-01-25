const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];


const body = document.querySelector('body');
console.log(body);
const startButton = document.querySelector('[data-action="start"]');
const stopButton = document.querySelector('[data-action="stop"]');

let interval = null;

startButton.addEventListener("click", clickStartButton);


function clickStartButton() {
  changeColors();
  interval = setInterval(changeColors, 500);

  startButton.removeEventListener("click", clickStartButton);
  stopButton.addEventListener("click", clickStopButton);
}


function changeColors() {
  body.style.backgroundColor = colors[randomIntegerFromInterval(0, 5)];
}

function clickStopButton() {
  clearInterval(interval);
  startButton.addEventListener("click", clickStartButton);
  stopButton.removeEventListener("click", clickStopButton);
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
