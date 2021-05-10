import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TimerStatus } from '../../pomo-timer.service';

@Component({
  selector: 'organism-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss'],
})
export class ClockComponent implements OnChanges {
  @Input() status: TimerStatus
  @Input() minutes: number
  @Input() seconds: number
  isRinging: boolean

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.isRinging = this.status === TimerStatus.Ringing
  } 
}
