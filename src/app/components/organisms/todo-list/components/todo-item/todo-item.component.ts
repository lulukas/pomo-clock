import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITodo } from '../../todo-list.service';

@Component({
  selector: 'organism-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: ITodo;
  @Output() delete = new EventEmitter<boolean>();
  @Output() done = new EventEmitter<boolean>();
  isDone: boolean = false;
  buttonLabel: string;

  constructor() {}

  ngOnInit(): void {
    this.isDone = this.todo?.done;
    this.buttonLabel = this.todo?.done ? "restore" : "done";
  }

  onDelete = () => {
    console.log(`delete`)
    this.delete.emit();
  };

  onSetDone = () => {
    this.done.emit(!this.isDone);
    this.isDone = !this.isDone;
  };
}
