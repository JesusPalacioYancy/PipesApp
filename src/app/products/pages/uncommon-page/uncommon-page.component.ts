import { Component } from '@angular/core';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  //I18nSelectPipe
  public name: string = "Jesus";
  public gender: "male" | "female" = "male";

  public invitationMap = {
    male : 'Invitarlo',
    female: 'Invitarla'
  }

  changeClient(): void{
    this.name = "Katty";
    this.gender = "female"
  }

 // i18nPlural

 public clients: string[] = ['Jesus', 'Silvera', 'Juan', 'Brandon', 'Keiner']
 public clientsMap = {
  '=0' : 'No tenemos clintes',
  '=1' : 'tenemos un cliente esperando',
  '=2' : 'tenemos 2 clientes esperando',
  'other' : 'tenemos # clientes esperando'
 }


 deleteClient():void{
  this.clients.shift();
 }



}
