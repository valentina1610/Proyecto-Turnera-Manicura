import { Component } from '@angular/core';
import { Turno } from './model/turno';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Flower Nail Beauty';

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

  services = [
    { name: 'Manicura Semi-permanente', duration: '60 min', price: '$2500' },
    { name: 'Uñas Esculpidas', duration: '90 min', price: '$4500' },
    { name: 'Pedicura Spa', duration: '60 min', price: '$3000' },
    { name: 'Kapping', duration: '75 min', price: '$3500' },
  ];

  turnos: Turno[] = [];

  addTurno(serviceName: string) {
    
  }

  deleteTurno(id?: string) {
    if (!id) return;
    this.turnos = this.turnos.filter(t => t.id !== id);
  }

  // Métodos para hover
  hoverEnter(event: Event) {
    (event.target as HTMLElement).style.backgroundColor = this.colors.secondaryDark;
  }

  hoverLeave(event: Event) {
    (event.target as HTMLElement).style.backgroundColor = this.colors.secondary;
  }
}