import { Component, OnInit } from '@angular/core';
import { ITimerSettings, PomoTimerService } from '../../pomo-timer.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'organism-pomo-timer-settings',
  templateUrl: './pomo-timer-settings.component.html',
  styleUrls: ['./pomo-timer-settings.component.scss'],
})
export class PomoTimerSettingsComponent implements OnInit {
  settingsForm: FormGroup;

  constructor(
    private timerService: PomoTimerService,
    private formBuilder: FormBuilder
  ) {
    this.settingsForm = this.formBuilder.group(this.timerService.timerSettings);
  }

  ngOnInit(): void {}

  onSubmit = () => {
    console.log(
      '🚀 ~ file: todo-item-form.component.ts ~ line 17 ~ TodoItemFormComponent ~ todo',
      this.settingsForm.value
    );
    this.timerService.onChangeSettings(this.settingsForm.value);
  };
}
