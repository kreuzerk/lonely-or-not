import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'played' })
export class PlayedPipe implements PipeTransform {
  transform(value: boolean): string {
    return value ? '✅' : '⭕';
  }
}
