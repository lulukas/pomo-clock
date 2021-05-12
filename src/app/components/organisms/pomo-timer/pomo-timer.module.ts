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
import { PomoTimerSettingsComponent } from './components/pomo-timer-settings/pomo-timer-settings.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ClockComponent,
    PomoTimerComponent,
    PomoTimerButtonLabelPipe,
    TwoDigitNumberPipe,
    FillPipePipe,
    PomoTimerSettingsComponent,
  ],
  imports: [CommonModule, AtomsModule, ReactiveFormsModule],
  providers: [PomoTimerService],
  exports: [PomoTimerComponent, PomoTimerSettingsComponent],
})
export class PomoTimerModule {}
