import { Component } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {

  //Interpolación
  
  nombre: string = 'Ricardo';
  apellido: string = 'Cortes';
  edad: number = 28;
  //private edad: number = 28;

  /*getEdad():number{
    return this.edad;
  }*/

}
