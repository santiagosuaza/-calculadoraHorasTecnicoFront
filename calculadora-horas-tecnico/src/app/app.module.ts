import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { ConsultaTecnicoTiempoTrabajadoComponent } from './components/consulta-tecnico-tiempo-trabajado/consulta-tecnico-tiempo-trabajado.component';
import { ResultadoConsultaHorasEmpleadoComponent } from './components/resultado-consulta-horas-empleado/resultado-consulta-horas-empleado.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RegistrarServicioTecnicoComponent } from './components/registrar-servicio-tecnico/registrar-servicio-tecnico.component';


@NgModule({
  declarations: [
    AppComponent,
    ResultadoConsultaHorasEmpleadoComponent,
    ConsultaTecnicoTiempoTrabajadoComponent,
    RegistrarServicioTecnicoComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
