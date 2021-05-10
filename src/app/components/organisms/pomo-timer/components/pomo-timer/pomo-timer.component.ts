import { Component, OnInit } from '@angular/core';
import { ITimer, PomoTimerService, TimerStatus } from '../../pomo-timer.service';

@Component({
  selector: 'organism-pomo-timer',
  templateUrl: './pomo-timer.component.html',
  styleUrls: ['./pomo-timer.component.scss'],
})
export class PomoTimerComponent {
  timer: ITimer;

  constructor(private timerService: PomoTimerService) {
    this.timer = this.timerService.timer;
  }

  handleButtonClick = () => this.timerService.onButtonClick()
}
