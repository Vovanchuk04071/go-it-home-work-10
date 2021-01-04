const refs = {
    day: document.querySelector('[data-value="days"]'),
    hours: document.querySelector('[data-value="hours"]'),
    mins: document.querySelector('[data-value="mins"]'),
    secs: document.querySelector('[data-value="secs"]'),
}

class CountdownTimer {
    constructor ({selector, targetDate}) {
        this.selector = selector;
        this.targetDate = targetDate;
    }
}

const timer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Jan 5, 2021'),
});

function differentTime() {
    const today = Date.now();
    const futureTime = timer.targetDate.getTime();
    return futureTime - today;
}


const timerId = setInterval(() => {
    const time = differentTime()
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);
    updateClockFace({days, hours, mins,  secs});
}, 1000)


function updateClockFace({days, hours, mins,  secs}) {
    refs.day.textContent = days;
    refs.hours.textContent = hours;
    refs.mins.textContent = mins;
    refs.secs.textContent = secs;
}

