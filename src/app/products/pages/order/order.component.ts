import { Component } from '@angular/core';
import { Color, Hero } from '../../interface/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
})
export class OrderComponent {

  public isUpperCase: boolean = false;
  public sortBy?: keyof Hero

  public heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black
    },
    {
      name: 'Flash',
      canFly: false,
      color: Color.red
    },
    {
      name: 'Beast Boy',
      canFly: true,
      color: Color.green
    }
  ];


  toggleUpperCase():void {
    this.isUpperCase = !this.isUpperCase
  };

  changeOrder(value: keyof Hero) {
    this.sortBy = value
  }


  
};
