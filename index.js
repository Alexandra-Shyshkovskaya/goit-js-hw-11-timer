class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate.getTime();
    this.days = document.querySelector(`${this.selector} span[data-value="days"]`);
    this.hours = document.querySelector(`${this.selector} span[data-value="hours"]`);
    this.mins = document.querySelector(`${this.selector} span[data-value="mins"]`);
    this.secs = document.querySelector(`${this.selector} span[data-value="secs"]`);
    this.start();
  }

  timerUpdate(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24))
      .toString()
      .padStart(2, "0");

    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      .toString()
      .padStart(2, "0");

    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))
      .toString()
      .padStart(2, "0");

    const secs = Math.floor((time % (1000 * 60)) / 1000)
      .toString()
      .padStart(2, "0");

    this.days.textContent = days;
    this.hours.textContent = hours;
    this.mins.textContent = mins;
    this.secs.textContent = secs;
  }

  start() {
    setInterval(() => {
      const delta = this.targetDate - Date.now();
      this.timerUpdate(delta);
    }, 1000);
  }
}

const timer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("May 28, 2021"),
});