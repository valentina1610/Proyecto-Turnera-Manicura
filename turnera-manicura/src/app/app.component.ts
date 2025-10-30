// Importa Component para crear un componente de Angular
import { Component } from '@angular/core';

// Importa la clase Turno para tipar los turnos del usuario
import { Turno } from './model/turno';

// Decorador @Component: define el componente principal
@Component({
  selector: 'app-root',                  // Selector para usar este componente en HTML (<app-root></app-root>)
  templateUrl: './app.component.html',   // Archivo HTML asociado
  styleUrls: ['./app.component.css']     // Archivo CSS asociado
})
export class AppComponent {
  // Título de la aplicación
  title = 'Flower Nail Beauty';

  // Colores usados en la interfaz (para estilos dinámicos)
  colors = {
    primary: '#E8ADA0',
    primaryDark: '#D9928A',
    secondary: '#D9B036',
    secondaryDark: '#B8922C',
    accent: '#A8C5A3',
    light: '#F2D9D0',
    lighter: '#FFF8F5',
    text: '#4A3831',
  };

  // Lista de servicios disponibles
  services = [
    { name: 'Manicura Semi-permanente', duration: '60 min', price: '$2500' },
    { name: 'Uñas Esculpidas', duration: '90 min', price: '$4500' },
    { name: 'Pedicura Spa', duration: '60 min', price: '$3000' },
    { name: 'Kapping', duration: '75 min', price: '$3500' },
  ];

  // Array donde se almacenan los turnos del usuario
  turnos: Turno[] = [];

  // Método para agregar un turno (vacío por ahora)
  addTurno(serviceName: string) {
    // Aquí se implementará la lógica para crear un turno nuevo
  }

  // Método para eliminar un turno por ID
  deleteTurno(id?: number) {
    if (!id) return;
    this.turnos = this.turnos.filter(t => t.id !== id);
}

  // Métodos para cambiar el color de fondo del botón al pasar el mouse (hover)
  hoverEnter(event: Event) {
    (event.target as HTMLElement).style.backgroundColor = this.colors.secondaryDark;
  }

  hoverLeave(event: Event) {
    (event.target as HTMLElement).style.backgroundColor = this.colors.secondary;
  }
}