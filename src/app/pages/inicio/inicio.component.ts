import { Component, OnInit } from '@angular/core';
import { PersonaComponent } from '../persona/persona.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [PersonaComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent implements OnInit{

  nombre:string = '';
  titulo:string ='';

ngOnInit(): void {
  Swal.fire({
    title: "Custom animation with Animate.css",
    showClass: {
      popup: `
        animate__animated
        animate__fadeInUp
        animate__faster
      `
    },
    hideClass: {
      popup: `
        animate__animated
        animate__fadeOutDown
        animate__faster
      `
    }
  });
}

mostrarNombre():void{
  this.nombre = 'Camilo Montaño';
  this.titulo='Componente 1';

}
}



