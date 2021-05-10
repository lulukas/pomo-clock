import { Pipe, PipeTransform } from '@angular/core';
import { ITodo } from '../todo-list.service';

@Pipe({
  name: 'isDone',
  pure: false,
})
export class IsDonePipe implements PipeTransform {
  transform = (
    todoList: ITodo[],
    isDone: boolean
  ): { todo: ITodo; index: number }[] =>
    todoList
      .map((todo, index) => ({ todo, index }))
      .filter((item) => item.todo.done === isDone);
}
