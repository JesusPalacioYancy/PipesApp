import { Component } from '@angular/core';
import { interval, Observable, tap } from 'rxjs';

@Component({
  selector: 'products-uncommon-page',
  templateUrl: './uncommon-page.component.html'
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
 };


 deleteClient():void{
  this.clients.shift();
 };



 // KeyValuePipe | JsonPipe

 public person = {
  name: 'Jesus',
  age: 19,
  height: 1.84,
  address: 'Colombia, Soledad'
 };

 // AsyncPipe
 public myObservableTimer:Observable<number> = interval(2000).pipe(
  tap( value => console.log('value:',value) )
  );

 public myPromiceValue: Promise<string> = new Promise( (res, rec) => {
  setTimeout(() => {
    res('Tenemos datos')
    console.log('Tenemos datos')
  }, 3500);
 })



}
