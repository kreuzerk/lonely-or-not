import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'played', standalone: true })
export class PlayedPipe implements PipeTransform {
  transform(value: boolean): string {
    return value ? '✅' : '⭕';
  }
}
