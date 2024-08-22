class Timer {
    constructor(element) {
        this.element = element;
        this.display = element.querySelector('.display');
        this.startBtn = element.querySelector('.start');
        this.pauseBtn = element.querySelector('.pause');
        this.stopBtn = element.querySelector('.stop');
        this.time = 0;
        this.interval = null;

        this.startBtn.addEventListener('click', () => this.start());
        this.pauseBtn.addEventListener('click', () => this.pause());
        this.stopBtn.addEventListener('click', () => this.stop());
    }

    start() {
        if (!this.interval) {
            this.interval = setInterval(() => {
                this.time += 10;
                this.updateDisplay();
            }, 10);
        }
    }

    pause() {
        clearInterval(this.interval);
        this.interval = null;
    }

    stop() {
        this.pause();
        this.time = 0;
        this.updateDisplay();
    }

    updateDisplay() {
        const minutes = Math.floor(this.time / 60000);
        const seconds = Math.floor((this.time % 60000) / 1000);
        const centiseconds = Math.floor((this.time % 1000) / 10);
        this.display.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${centiseconds.toString().padStart(2, '0')}`;
    }
}

const timerElements = document.querySelectorAll('.timer');
const timers = Array.from(timerElements).map(element => new Timer(element));

document.getElementById('startAll').addEventListener('click', () => {
    timers.forEach(timer => timer.start());
});

document.getElementById('pauseAll').addEventListener('click', () => {
    timers.forEach(timer => timer.pause());
});

document.getElementById('stopAll').addEventListener('click', () => {
    timers.forEach(timer => timer.stop());
});