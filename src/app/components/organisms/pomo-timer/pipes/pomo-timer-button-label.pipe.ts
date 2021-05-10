import { Pipe, PipeTransform } from '@angular/core';
import { TimerStatus } from '../pomo-timer.service';

@Pipe({
  name: 'pomoTimerButtonLabel',
})
export class PomoTimerButtonLabelPipe implements PipeTransform {
  transform = (status: TimerStatus, isBreak: boolean): string => {
    let result: string;
    switch (status) {
      case TimerStatus.Ready:
        result = isBreak ? 'Start Break' : 'start Work';
        break;
      case TimerStatus.Running:
        result = 'Pause';
        break;
      case TimerStatus.Ringing:
        result = 'Silent';
        break;
    }
    return result;
  };
}
