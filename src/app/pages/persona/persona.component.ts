import { Component } from '@angular/core';

@Component({
  selector: 'app-persona',
  standalone: true,
  imports: [],
  templateUrl: './persona.component.html',
  styleUrl: './persona.component.css'
})
export class PersonaComponent {

  titulo:string ='Componente persona';
  edad:number =33;
  ocultar: boolean =false;

  users: { id: number; name: string }[] = [
    { id: 0, name: 'Camilo' },
    { id: 1, name: 'Julieta' },
    { id: 2, name: 'Karen' },
    { id: 3, name: 'Catalina' },
    { id: 4, name: 'Laura' },
  ];

}
