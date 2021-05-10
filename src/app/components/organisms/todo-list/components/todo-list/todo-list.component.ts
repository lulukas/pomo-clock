import { Component, OnInit } from '@angular/core';
import { ITodo } from '../../todo-list.service';

@Component({
  selector: 'organism-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  showTodoForm: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  public todoList: ITodo[] = [];

  addTodo = (todo: ITodo) => {
    this.todoList.push(todo);
    this.showTodoForm = false;
  };

  removeTodo = (index: number) => () => {
    if (index > -1) this.todoList.splice(index, 1);
  };

  handleDone = (index: number) => (done: boolean) => {
    console.log(`index`, index);
    console.log(`done`, done);
    if (index > -1) {
      const newTodo = { description: this.todoList[index].description, done };
      this.todoList.splice(index, 1);
      this.todoList.push(newTodo);
    }
  };

  handleShowForm = () => (this.showTodoForm = true);
}
