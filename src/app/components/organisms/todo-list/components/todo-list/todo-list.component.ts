import { Component, OnInit } from '@angular/core';
import { ITodo } from '../../todo-list.service';

const LOCAL_STORAGE_KEYS = {
  todoList: 'todos',
};

@Component({
  selector: 'organism-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  showTodoForm: boolean = false;
  todoList: ITodo[];

  constructor() {}

  ngOnInit(): void {
    this.todoList = this.loadTodoListFromLocalStorage() || [];
  }

  addTodo = (todo: ITodo) => {
    this.todoList.push(todo);
    this.showTodoForm = false;
    this.saveTodoListToLocalStorage();
  };

  removeTodo = (index: number) => () => {
    if (index > -1) this.todoList.splice(index, 1);
    this.saveTodoListToLocalStorage();
  };

  handleDone = (index: number) => (done: boolean) => {
    if (index > -1) {
      const newTodo = { description: this.todoList[index].description, done };
      this.todoList.splice(index, 1);
      this.todoList.push(newTodo);
    }
    this.saveTodoListToLocalStorage();
  };

  handleShowForm = () => (this.showTodoForm = true);

  private saveTodoListToLocalStorage = () => {
    localStorage.setItem(
      LOCAL_STORAGE_KEYS.todoList,
      JSON.stringify(this.todoList)
    );
  };

  private loadTodoListFromLocalStorage = (): ITodo[] | null => {
    const loadedTodos = localStorage.getItem(LOCAL_STORAGE_KEYS.todoList);
    const loadedTodosParsed =
      loadedTodos === null ? loadedTodos : JSON.parse(loadedTodos);
    console.log(
      '🚀 ~ file: pomo-timer.service.ts ~ line 111 ~ PomoTimerService ~ loadedTodosParsed',
      loadedTodosParsed
    );
    return loadedTodosParsed;
  };
}
