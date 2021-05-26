class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = document.querySelector(`${selector}`);
    this.targetDate = targetDate.getTime();
    this.start();
    this.finish();
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

    this.selector.querySelector('[data-value="days"]').textContent = days;
    this.selector.querySelector('[data-value="hours"]').textContent = hours;
    this.selector.querySelector('[data-value="mins"]').textContent = mins;
    this.selector.querySelector('[data-value="secs"]').textContent = secs;
  }

  start() {
   this.intervalId = setInterval(() => {
      let delta = this.targetDate - Date.now();
      this.timerUpdate(delta);
    }, 1000);
  }
   finish() {
     if (delta < 0) {
    
      clearInterval(this.intervalId);
    }
    
  }
   
}

const timer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("May 28, 2021"),
});