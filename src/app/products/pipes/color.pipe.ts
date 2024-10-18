import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../interface/hero.interface';

@Pipe({
  name: 'Color'
})
export class ColorPipe implements PipeTransform {

  transform(value: Color): string {
    return Color[value];
  }

}
