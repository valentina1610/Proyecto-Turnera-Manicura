// Importa NgModule para definir módulos de Angular
import { NgModule } from '@angular/core';

// Importa BrowserModule, necesario para cualquier aplicación Angular que se ejecute en el navegador
import { BrowserModule } from '@angular/platform-browser';

// Importa FormsModule para usar la vinculación bidireccional [(ngModel)] en formularios
import { FormsModule } from '@angular/forms';

// Importa BrowserAnimationsModule, opcional, útil si vas a usar animaciones en Angular
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Importa los componentes que forman parte del módulo
import { AppComponent } from './app.component';
import { BookingDialogComponent } from './booking-dialog/booking-dialog.component';

// Decorador @NgModule: define un módulo de Angular
@NgModule({
  // Declaraciones: lista de componentes, directivas y pipes que pertenecen a este módulo
  declarations: [
    AppComponent,           // Componente principal de la aplicación
    BookingDialogComponent  // Componente del diálogo de reserva
  ],
  // Imports: módulos externos que necesitamos usar en este módulo
  imports: [
    BrowserModule,           // Necesario para apps que corren en navegador
    FormsModule,             // Para usar [(ngModel)] en formularios
    BrowserAnimationsModule  // Permite usar animaciones (opcional)
  ],
  // Providers: servicios que estarán disponibles globalmente (vacío por ahora)
  providers: [],
  // Bootstrap: componente raíz que Angular cargará al iniciar la app
  bootstrap: [AppComponent]
})
// Exporta la clase del módulo principal de la aplicación
export class AppModule {}