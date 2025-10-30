// Importa el decorador Injectable de Angular
// Permite que este servicio pueda inyectarse en otros componentes o servicios
import { Injectable } from '@angular/core';

// Importa la clase Turno, que define la estructura del objeto turno
import { Turno } from 'src/app/model/turno';

// Decorador @Injectable: convierte esta clase en un servicio inyectable
@Injectable({
  providedIn: 'root' 
  // 'providedIn: root' indica que Angular creará una única instancia global del servicio
  // y la compartirá en toda la aplicación (patrón Singleton)
})
export class TurnoService {

  // Array privado que contiene todos los turnos (la “base de datos” local en memoria)
  private arrayTurno: Turno[] = [
    // Dos turnos de ejemplo cargados por defecto
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

  // ---------- MÉTODOS CRUD (ABM) ----------

  // 📘 CONSULTA: Devuelve todos los turnos
  getTurnos(): Turno[] {
    // Retorna una copia del array original (spread operator [...])
    // para evitar que el componente pueda modificarlo directamente
    return [...this.arrayTurno];
  }

  // 📘 CONSULTA: Devuelve un turno según su ID
  getTurnoByID(id: number): Turno | undefined {
    // Busca el turno con el ID recibido
    // Si no lo encuentra, devuelve undefined
    return this.arrayTurno.find(t => t.id === id);
  }

  // ➕ ALTA: Agrega un nuevo turno
  addTurno(turno: Turno): void {
    // Asigna un ID automático:
    // Si ya existen turnos, toma el ID del último y le suma 1; si no, empieza desde 1
    turno.id = this.arrayTurno.length > 0 
      ? this.arrayTurno[this.arrayTurno.length - 1].id! + 1 
      : 1;

    // Agrega el turno al array interno
    this.arrayTurno.push(turno);
  }

  // ✏️ MODIFICACIÓN: Actualiza un turno existente
  updateTurno(turno: Turno): void {
    // Busca el índice del turno con el mismo ID
    const index = this.arrayTurno.findIndex(t => t.id === turno.id);

    // Si lo encuentra, reemplaza el turno viejo por el nuevo
    if (index !== -1) {
      this.arrayTurno[index] = turno;
    }
    // Si no lo encuentra, no hace nada
  }

  // ❌ BAJA: Elimina un turno según su ID
  deleteTurno(id: number): void {
    // Filtra el array dejando solo los turnos cuyo ID sea distinto al recibido
    this.arrayTurno = this.arrayTurno.filter(t => t.id !== id);
  }

  // Constructor vacío (podría usarse para inyectar dependencias si hiciera falta)
  constructor() { }
}