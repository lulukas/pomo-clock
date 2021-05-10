import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fillPipe',
})
export class FillPipePipe implements PipeTransform {
  transform = (value: number): Array<number> => {
    const arr: Array<number> = new Array(value).fill(1);
    console.log(
      '🚀 ~ file: fill-pipe.pipe.ts ~ line 9 ~ FillPipePipe ~ arr',
      arr
    );
    return arr;
  };
}
