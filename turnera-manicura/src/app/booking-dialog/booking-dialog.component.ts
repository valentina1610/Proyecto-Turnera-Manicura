import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Turno } from '../model/turno';

@Component({
  selector: 'app-booking-dialog',
  templateUrl: './booking-dialog.component.html',
  styleUrls: ['./booking-dialog.component.css']
})
export class BookingDialogComponent {
  @Input() turno!: Turno;
  @Output() confirm = new EventEmitter<Omit<Turno, 'id'>>();
  @Output() close = new EventEmitter<void>();

  submit() {
    this.confirm.emit({
      servicio: this.turno.servicio,
      nombre: this.turno.nombre,
      apellido: this.turno.apellido,
      fecha: this.turno.fecha,
      hora: this.turno.hora,
      conQuien: this.turno.conQuien
    });
  }
}
