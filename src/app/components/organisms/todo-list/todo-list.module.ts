import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodoItemFormComponent } from './components/todo-item-form/todo-item-form.component';

@NgModule({
  declarations: [TodoListComponent, TodoItemComponent, TodoItemFormComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [TodoListComponent],
})
export class TodoListModule {}
