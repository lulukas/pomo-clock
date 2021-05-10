import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClockComponent } from './components/clock/clock.component';
import { PomoTimerComponent } from './components/pomo-timer/pomo-timer.component';

// Pipes
import { PomoTimerButtonLabelPipe } from './pipes/pomo-timer-button-label.pipe';
import { TwoDigitNumberPipe } from './pipes/two-digit-number.pipe';
import { PomoTimerService } from './pomo-timer.service';
import { FillPipePipe } from './pipes/fill-pipe.pipe';
import { AtomsModule } from '../../atoms/atoms.module';

@NgModule({
  declarations: [ClockComponent, PomoTimerComponent, PomoTimerButtonLabelPipe, TwoDigitNumberPipe, FillPipePipe],
  imports: [CommonModule, AtomsModule],
  providers: [
    PomoTimerService,
  ],
  exports: [PomoTimerComponent],
})
export class PomoTimerModule {}
