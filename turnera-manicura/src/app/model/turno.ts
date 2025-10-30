// Define la clase Turno, que representa la estructura de un turno o reserva
export class Turno {
  // ID opcional del turno (por ejemplo, asignado por la base de datos o API)
  id?: number;

  // Nombre de la persona que reserva el turno
  nombre: string;

  // Apellido de la persona que reserva el turno
  apellido: string;

  // Fecha del turno (tipo Date para poder manipular fechas fácilmente)
  fecha: Date;

  // Hora del turno (tipo string, normalmente en formato "HH:mm")
  hora: string;

  // Servicio elegido (por ejemplo, “Corte de pelo”, “Masaje”, etc.)
  servicio: string;

  // Persona con la que se tiene el turno (por ejemplo, un profesional o empleado)
  conQuien: string;
}