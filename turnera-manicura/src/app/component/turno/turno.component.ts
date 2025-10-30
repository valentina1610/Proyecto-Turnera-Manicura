// Importa las dependencias básicas de Angular necesarias para crear un componente
import { Component, OnInit } from '@angular/core';

// Decorador @Component: define la configuración del componente
@Component({
  selector: 'app-turno',                       // Nombre del selector para usar este componente en HTML (<app-turno></app-turno>)
  templateUrl: './turno.component.html',       // Archivo HTML asociado al componente
  styleUrls: ['./turno.component.css']         // Archivo(s) CSS con los estilos del componente
})
export class TurnoComponent implements OnInit { // Clase principal del componente que implementa la interfaz OnInit
  
  // El ciclo de vida OnInit se ejecuta automáticamente cuando el componente se inicializa
  ngOnInit(): void {
    // Por ahora lanza un error porque todavía no se implementó el método
    // Esta línea es generada automáticamente al crear el componente
    // y deberías reemplazarla por la lógica de inicialización (por ejemplo, cargar datos o configurar variables)
    throw new Error('Method not implemented.');
  }

}