import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Para [(ngModel)]
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Opcional, útil para animaciones

import { AppComponent } from './app.component';
import { BookingDialogComponent } from './booking-dialog/booking-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    BookingDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule // opcional
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}