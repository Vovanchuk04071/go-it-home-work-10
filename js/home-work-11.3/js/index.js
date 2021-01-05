const refs = {
  timer: document.querySelector("#timer-1"),
  day: document.querySelector('[data-value="days"]'),
  hours: document.querySelector('[data-value="hours"]'),
  mins: document.querySelector('[data-value="mins"]'),
  secs: document.querySelector('[data-value="secs"]'),
};

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }
  // createHtmlTimer () {
  //     const time = document.querySelector(".timer")
  //     time.setAttribute('id', this.selector)
  //     for (let i = 1; 4 >= i; i += 1) {
  //         let marcup = document.createElement('div')
  //         marcup.classList.add('field')
  //         const elem = document.createElement('span')
  //         elem.setAttribute
  //         time.prepend(marcup)
  //         marcup.prepend(elem)

  //     }

  //     // time.innerHTML = marcup;
  //     console.log(time)
  // };
}

const timer = new CountdownTimer({
  selector: "#timer-2",
  targetDate: new Date("Jan 27, 2021"),
});

// console.log(timer.createHtmlTimer())

function differentTime() {
  const today = Date.now();
  const futureTime = timer.targetDate.getTime();
  return futureTime - today;
}

const timerId = setInterval(() => {
  const time = differentTime();
  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((time % (1000 * 60)) / 1000);
  updateClockFace({ days, hours, mins, secs });
}, 1000);

function updateClockFace({ days, hours, mins, secs }) {
  refs.day.textContent = days;
  refs.hours.textContent = hours;
  refs.mins.textContent = mins;
  refs.secs.textContent = secs;
}
