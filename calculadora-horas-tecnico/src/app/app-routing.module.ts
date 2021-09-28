import { RouterModule, Routes } from "@angular/router";
import { Component, NgModule } from '@angular/core';
import { ConsultaTecnicoTiempoTrabajadoComponent } from './components/consulta-tecnico-tiempo-trabajado/consulta-tecnico-tiempo-trabajado.component';
import { ResultadoConsultaHorasEmpleadoComponent } from './components/resultado-consulta-horas-empleado/resultado-consulta-horas-empleado.component';







const routes: Routes = [
{path :  "ConsultaTecnico", component: ConsultaTecnicoTiempoTrabajadoComponent},
{path : "ResultadoTecnico", component: ResultadoConsultaHorasEmpleadoComponent}

];

@NgModule({
    imports: [RouterModule.forRoot(routes),
    exports: [RouterModule]]
})
export class AppRoutingModule { }