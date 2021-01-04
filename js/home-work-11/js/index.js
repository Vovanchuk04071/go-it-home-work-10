const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const body = document.querySelector('body')

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const startBtn = document.querySelector('[data-action="start"]')
const stopBtn = document.querySelector('[data-action="stop"]')


const randomColor = {
  isActive: false,
  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
      this.timerId = setInterval(() => {
        const randomNumber = randomIntegerFromInterval(0, 5)
      body.style.backgroundColor = colors[randomNumber]
    console.log('random start!')
    }, 1000)
  },
  stop() {
    clearInterval(this.timerId);
    console.log('random Stop!');
    this.isActive = false;
  },
};

startBtn.addEventListener('click', randomColor.start.bind(randomColor))

stopBtn.addEventListener('click', randomColor.stop.bind(randomColor))
  