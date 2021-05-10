import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ITodo } from '../../todo-list.service';

@Component({
  selector: 'organism-todo-item-form',
  templateUrl: './todo-item-form.component.html',
  styleUrls: ['./todo-item-form.component.scss'],
})
export class TodoItemFormComponent implements OnInit {
  @Output() onAddTodo = new EventEmitter<ITodo>();
  todoForm = this.formBuilder.group({
    description: '',
    done: false,
  });
  
  constructor(private formBuilder: FormBuilder) {}
  
  ngOnInit(): void {}

  onSubmit = () => {
    console.log(
      '🚀 ~ file: todo-item-form.component.ts ~ line 17 ~ TodoItemFormComponent ~ todo',
      this.todoForm.value
    );
    this.onAddTodo.emit(this.todoForm.value);
    this.todoForm.reset();
  };
}
