import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PersonaComponent } from "./pages/persona/persona.component";
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from "./shared/header/header.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, InicioComponent, PersonaComponent, FooterComponent, HeaderComponent]
})
export class AppComponent {
  title = 'my-app';
}
