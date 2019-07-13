class Pomodoro {
  constructor() {
    this.btn = document.getElementsByClassName('btn')[0];
    this.timeDOM = document.getElementsByClassName('time')[0];
    this.time = null;
    let flag = false;
    this.setTime();
    this.btn.addEventListener('click', () => {
      flag = !flag;
      this.btn.classList.toggle('play');
      this.btn.classList.toggle('pause');
      if (flag) {
        this.timeReducer();
      } else {
        clearInterval(this.timer);
      }
    });
  }

  setTime() {
    const workingTime = 25;
    const breakingTime = 5;
    this.time = workingTime * 60;
  }

  timeReducer() {
    this.timer = setInterval(() => {
      if (this.time > 0) {
        this.convertTime(--this.time);
      } else {
        clearInterval(this.timer);
        console.log('Time out');
      }
    }, 1000);
  }

  convertTime(time) {
    const minute = Math.floor(time / 60);
    const second = Math.floor(time % 60);
    this.timeDOM.textContent = `${minute}:${second}`;
    console.log(this.timeDOM.textContent);
  }
}

export { Pomodoro as default };
