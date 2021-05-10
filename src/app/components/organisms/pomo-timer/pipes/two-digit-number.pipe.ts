import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'twoDigitNumber'
})
export class TwoDigitNumberPipe implements PipeTransform {

  transform = (number: number): string => number < 10 ? `0${number}` : `${number}` 

}
