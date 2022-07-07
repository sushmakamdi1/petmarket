import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'loginIn'
})
export class LoginInPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
