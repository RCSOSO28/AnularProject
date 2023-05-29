import { Component } from "@angular/core";

@Component({
    selector: 'app-personas',
    templateUrl: './personas.component.html',    
    styleUrls: ['./personas.component.css']
})
export class PersonasComponent{
    //Propety Binding
    deshabilitar = false;
    
    //Event Binding
    mensaje: string = 'No se ha agregado ninguna persona';

    agregarPersona(){
        this.mensaje = 'Persona agregada';
    }
}