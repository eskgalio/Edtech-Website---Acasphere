class Timer {
    constructor() {
      this.timeRemaining = 1500; 
      this.intervalId = null;
      this.isRunning = false;
      this.onTick = null; 
      this.onComplete = null; 
    }
      start(duration = 1500, onTick, onComplete) {
      this.timeRemaining = duration;
      this.onTick = onTick;
      this.onComplete = onComplete;
  
      if (this.isRunning) return; 
  
      this.isRunning = true;
      this.intervalId = setInterval(() => {
        this.timeRemaining -= 1;
        if (this.onTick) this.onTick(this.getTime());
  
        if (this.timeRemaining <= 0) {
          this.stop();
          if (this.onComplete) this.onComplete();
        }
      }, 1000);
    }
  
    pause() {
      if (!this.isRunning) return;
      clearInterval(this.intervalId);
      this.isRunning = false;
    }
  
    reset() {
      this.stop();
      this.timeRemaining = 1500;
      if (this.onTick) this.onTick(this.getTime());
    }
  
    stop() {
      clearInterval(this.intervalId);
      this.isRunning = false;
      this.intervalId = null;
    }
  
    getTime() {
      const minutes = Math.floor(this.timeRemaining / 60).toString().padStart(2, '0');
      const seconds = (this.timeRemaining % 60).toString().padStart(2, '0');
      return `${minutes}:${seconds}`;
    }
  }
  
  export default Timer;
  