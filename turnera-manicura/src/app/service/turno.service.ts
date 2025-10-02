import { Injectable } from '@angular/core';
// Es para poder inyectar este servicio en cualquier componente de Angular

import { Turno } from 'src/app/model/turno';
// Importamos la clase Turno que define la estructura de un turno

@Injectable({
  providedIn: 'root'
  // Esto hace que Angular cree una única instancia global de este servicio
  // que puede ser usada en cualquier parte de la aplicación
})
export class TurnoService {
  private arrayTurno: Turno[] = [ //  // Array privado que contiene todos los turnos
    //Dos turnos de ejemplo: 
    Object.assign(new Turno(), {
      id: 1,
      nombre: 'Pamela',
      apellido: 'Gonzales',
      fecha: new Date('2025-10-05'),
      hora: '15:30',
      servicio: 'Esmaltado semipermanente',
      conQuien: 'Flor'
    }),
    Object.assign(new Turno(), {
      id: 2,
      nombre: 'Lucía',
      apellido: 'Perez',
      fecha: new Date('2025-10-06'),
      hora: '17:00',
      servicio: 'Manicura completa',
      conQuien: 'Lola'
    })
  ];

  //-----ABM------

  //Devuelve todos los turnos: (CONSULTA)
  getTurnos(): Turno[] {
  // Retorna una copia del array
    return [...this.arrayTurno];
  }
   //Devuelve un turno por ID: (CONSULTA)
   getTurnoByID(id : number): Turno | undefined {
    // Busca el primer turno que tenga el ID solicitado
    // Si no encuentra ninguno, devuelve undefined
    return this.arrayTurno.find(t => t.id === id);
  }

  // Agrega un turno nuevo al arreglo (ALTA)
  addTurno(turno: Turno): void {
    // Asigna un ID automático: si hay turnos, suma 1 al último ID; si no, empieza en 1
    turno.id = this.arrayTurno.length > 0 ? this.arrayTurno[this.arrayTurno.length - 1].id + 1 : 1;

    // Agrega el turno al arreglo interno (push=add)
    this.arrayTurno.push(turno);
  }
  //Actualiza un turno existente (MODIFICACION)
  updateTurno(turno: Turno): void {
      // Busca el índice del turno con el mismo ID. Si no lo encuentra, devuelve -1.
      const index = this.arrayTurno.findIndex(t => t.id === turno.id);
      // Si lo encuentra, reemplaza el turno viejo por el nuevo
  if (index !== -1) {
    this.arrayTurno[index] = turno;
  }
  // Si no encuentra el ID, no hace nada
  }

  //Elimina un turno (BAJA)
  deleteTurno(id: number): void {
      this.arrayTurno = this.arrayTurno.filter(t => t.id !== id);

  }
  constructor() { }
}
