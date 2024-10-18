import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFly'
})
export class CanFlyPipe implements PipeTransform {

  transform(value: boolean): 'fly to'| 'does not fly ' {
    return value ? 'fly to': 'does not fly '
  };

}
