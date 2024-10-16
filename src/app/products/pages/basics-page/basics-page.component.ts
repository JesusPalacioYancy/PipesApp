import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {

  public nameLower: string = 'JESUS PALACIO';
  public nameUpper: string = 'jesus palacio';
  public nameTitle: string = 'jEsUs pAlAcIo';

  public customDate: Date = new Date()

}
