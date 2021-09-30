import { RouterModule, Routes } from "@angular/router";
import { Component, NgModule } from '@angular/core';
import { ConsultaTecnicoTiempoTrabajadoComponent } from './components/consulta-tecnico-tiempo-trabajado/consulta-tecnico-tiempo-trabajado.component';
import { RegistrarServicioTecnicoComponent } from './components/registrar-servicio-tecnico/registrar-servicio-tecnico.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';








const routes: Routes = [
{path :  "ConsultaTecnico", component: ConsultaTecnicoTiempoTrabajadoComponent},
{path : "RegistrarServicioTecnico", component: RegistrarServicioTecnicoComponent},
{path : "navBar", component: NavBarComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }