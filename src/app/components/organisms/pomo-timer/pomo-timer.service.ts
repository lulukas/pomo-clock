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

export interface ITimerSettings {
  shortBreak: number;
  longBreak: number;
  workTime: number;
  pomos: number;
}

const LOCAL_STORAGE_KEYS = {
  timerSettings: 'timerSettings',
};

@Injectable()
export class PomoTimerService {
  timer: ITimer = {
    minutes: 0,
    seconds: 0,
    status: TimerStatus.Ready,
    pomoCount: 0,
    isBreak: false,
  };
  timerSettings: ITimerSettings;
  private intervalId: any;
  audio = new Audio();

  constructor() {
    this.timerSettings = this.loadSettingsFromLocalStorage() || {
      shortBreak: 3,
      longBreak: 15,
      workTime: 25,
      pomos: 4,
    };
    this.setTimer();
    this.loadSettingsFromLocalStorage();
    this.audio.src = '/assets/mixkit-games-worldbeat-466.mp3';
    this.audio.load();
  }

  private setTimer = () => {
    this.timer.seconds = 0;
    this.timer.status = TimerStatus.Ready;
    if (this.timer.isBreak) {
      this.timer.minutes =
        this.timer.pomoCount < this.timerSettings.pomos
          ? this.timerSettings.shortBreak
          : this.timerSettings.longBreak;
    } else {
      this.timer.minutes = this.timerSettings.workTime;
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

  private saveSettingsToLocalStorage = () => {
    localStorage.setItem(
      LOCAL_STORAGE_KEYS.timerSettings,
      JSON.stringify(this.timerSettings)
    );
  };

  private loadSettingsFromLocalStorage = (): ITimerSettings | null => {
    const loadedSettings = localStorage.getItem(
      LOCAL_STORAGE_KEYS.timerSettings
    );
    const loadedSeggingsParsed =
      loadedSettings === null ? loadedSettings : JSON.parse(loadedSettings);
    console.log(
      '🚀 ~ file: pomo-timer.service.ts ~ line 111 ~ PomoTimerService ~ loadedSeggingsParsed',
      loadedSeggingsParsed
    );
    return loadedSeggingsParsed;
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

  onChangeSettings = (settings: ITimerSettings) => {
    this.timerSettings = settings;
    this.setTimer();
    this.saveSettingsToLocalStorage();
  };
}
