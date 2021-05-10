import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITodo } from '../../todo-list.service';

@Component({
  selector: 'organism-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: ITodo;
  @Output() done = new EventEmitter<boolean>();
  isDone: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.isDone = this.todo?.done;
  }

  onSetDone = () => {
    this.done.emit(!this.isDone);
    this.isDone = !this.isDone;
  };
}
