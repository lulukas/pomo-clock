import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtomsModule } from '../atoms/atoms.module';
import { PomoTimerModule } from './pomo-timer/pomo-timer.module';

import { TopBarComponent } from './top-bar/top-bar.component';
import { TodoListModule } from './todo-list/todo-list.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TopBarComponent],
  imports: [CommonModule, AtomsModule, PomoTimerModule, TodoListModule, RouterModule],
  exports: [TopBarComponent, PomoTimerModule, TodoListModule],
})
export class OrganismsModule {}
