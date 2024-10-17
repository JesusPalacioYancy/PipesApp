import { Component } from '@angular/core';

@Component({
  selector: 'products-basics-page',
  templateUrl: './basics-page.component.html'
})
export class BasicsPageComponent {

  public nameLower: string = 'JESUS PALACIO';
  public nameUpper: string = 'jesus palacio';
  public nameTitle: string = 'jEsUs pAlAcIo';

  public customDate: Date = new Date()

}
