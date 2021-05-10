import { Injectable } from '@angular/core';

export enum TimerStatus {
  Ready,
  Running,
  Ringing,
}

export interface ITimer {
  minutes: number;
  seconds: number;
  status: TimerStatus;
  pomoCount: number;
  isBreak: boolean;
}

@Injectable()
export class PomoTimerService {
  timer: ITimer;
  private intervalId: any;
  audio = new Audio();

  constructor() {
    this.timer = {
      minutes: 0,
      seconds: 25,
      status: TimerStatus.Ready,
      pomoCount: 0,
      isBreak: false,
    };
    this.audio.src = '/assets/mixkit-games-worldbeat-466.mp3';
    this.audio.load();
  }

  private setTimer = () => {
    this.timer.minutes = 0;
    this.timer.status = TimerStatus.Ready;
    if (this.timer.isBreak) {
      this.timer.seconds = this.timer.pomoCount < 4 ? 3 : 15;
    } else {
      this.timer.seconds = 25;
    }
  };

  private startTimer = () => {
    this.timer.status = TimerStatus.Running;
    this.intervalId = setInterval(() => {
      if (this.timer.seconds - 1 == -1) {
        this.timer.minutes -= 1;
        this.timer.seconds = 59;
      } else this.timer.seconds -= 1;
      if (this.timer.minutes === 0 && this.timer.seconds == 0) {
        clearInterval(this.intervalId);
        this.timer.status = TimerStatus.Ringing;
        this.audio.play();
      }
    }, 1000);
  };

  private stopTimer = () => {
    clearInterval(this.intervalId);
    this.timer.status = TimerStatus.Ready;
  };

  private setSilent = () => {
    this.audio.pause();
    this.audio.currentTime = 0;
    if (!this.timer.isBreak || this.timer.pomoCount === 4) {
      this.timer.pomoCount =
        this.timer.pomoCount < 4 ? this.timer.pomoCount + 1 : 0;
      console.log(`this.timer.pomoCount`, this.timer.pomoCount);
    }
    this.timer.isBreak = !this.timer.isBreak;
    this.setTimer();
  };

  onButtonClick = () => {
    switch (this.timer.status) {
      case TimerStatus.Ready:
        this.startTimer();
        break;
      case TimerStatus.Running:
        this.stopTimer();
        break;
      case TimerStatus.Ringing:
        this.setSilent();
        break;
    }
  };
}
