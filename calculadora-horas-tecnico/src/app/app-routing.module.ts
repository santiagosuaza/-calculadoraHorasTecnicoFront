import { RouterModule, Routes } from "@angular/router";
import { NgModule } from '@angular/core';
import { ConsultaTecnicoTiempoTrabajadoComponent } from './components/consulta-tecnico-tiempo-trabajado/consulta-tecnico-tiempo-trabajado.component';
import { RegistrarServicioTecnicoComponent } from './components/registrar-servicio-tecnico/registrar-servicio-tecnico.component';



const routes: Routes = [
  {path :  "consultaTecnico", component: ConsultaTecnicoTiempoTrabajadoComponent},
  {path : "registrarServicioTecnico", component: RegistrarServicioTecnicoComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
