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

  public todoList: ITodo[] = [
    {
      description: 'Eiusmod ut deserunt.',
      done: false,
    },
    {
      description:
        'Ullamco culpa non non incididunt voluptate laboris ad cillum proident amet est sunt. Elit magna cillum nisi reprehenderit. Eiusmod aute pariatur ut sit eu nisi Lorem labore. Dolore culpa dolor fugiat nisi minim sunt mollit. Sit cillum ea duis sit sunt labore. Anim officia voluptate dolor deserunt qui aliqua officia ea nostrud velit ea culpa.',
      done: true,
    },
    {
      description:
        'Ullamco culpa non non incididunt voluptate laboris ad cillum proident amet est sunt. Elit magna cillum nisi reprehenderit. Eiusmod aute pariatur ut sit eu nisi Lorem labore. Dolore culpa dolor fugiat nisi minim sunt mollit. Sit cillum ea duis sit sunt labore. Anim officia voluptate dolor deserunt qui aliqua officia ea nostrud velit ea culpa.',
      done: true,
    },
    {
      description:
        'Ullamco culpa non non incididunt voluptate laboris ad cillum proident amet est sunt. Elit magna cillum nisi reprehenderit. Eiusmod aute pariatur ut sit eu nisi Lorem labore. Dolore culpa dolor fugiat nisi minim sunt mollit. Sit cillum ea duis sit sunt labore. Anim officia voluptate dolor deserunt qui aliqua officia ea nostrud velit ea culpa.',
      done: true,
    },
    {
      description:
        'Ullamco culpa non non incididunt voluptate laboris ad cillum proident amet est sunt. Elit magna cillum nisi reprehenderit. Eiusmod aute pariatur ut sit eu nisi Lorem labore. Dolore culpa dolor fugiat nisi minim sunt mollit. Sit cillum ea duis sit sunt labore. Anim officia voluptate dolor deserunt qui aliqua officia ea nostrud velit ea culpa.',
      done: true,
    },
    {
      description:
        'Ullamco culpa non non incididunt voluptate laboris ad cillum proident amet est sunt. Elit magna cillum nisi reprehenderit. Eiusmod aute pariatur ut sit eu nisi Lorem labore. Dolore culpa dolor fugiat nisi minim sunt mollit. Sit cillum ea duis sit sunt labore. Anim officia voluptate dolor deserunt qui aliqua officia ea nostrud velit ea culpa.',
      done: true,
    },
    {
      description:
        'Ullamco culpa non non incididunt voluptate laboris ad cillum proident amet est sunt. Elit magna cillum nisi reprehenderit. Eiusmod aute pariatur ut sit eu nisi Lorem labore. Dolore culpa dolor fugiat nisi minim sunt mollit. Sit cillum ea duis sit sunt labore. Anim officia voluptate dolor deserunt qui aliqua officia ea nostrud velit ea culpa.',
      done: true,
    },
    
  ];

  addTodo = (todo: ITodo) => {
    console.log(
      '🚀 ~ file: todo-list.component.ts ~ line 29 ~ TodoListComponent ~ todo',
      todo
    );
    this.todoList.push(todo);
    this.showTodoForm = false;
  };

  removeTodo = (index: number) => {
    if (index > -1) this.todoList.splice(index, 1);
  };

  handleDone = (index: number) => (done: boolean) => {
    console.log(`index`, index);
    console.log(`done`, done);
  };

  handleShowForm = () => (this.showTodoForm = true);
}
