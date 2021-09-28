import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TrabajoSemanaTecnico } from '../model/TrabajoSemanaTecnico.model';
import { URL_SERVICE } from '../config/config';
import { ConsultaServiciosSemanas } from '../model/ConsultaServiciosSemana.model';

@Injectable({
    providedIn: 'root'
})
export class TecnicoService {


  constructor(private http:HttpClient) { }

  postConsultaHorasTrabajadas(consultaServiciosSemanas: ConsultaServiciosSemanas ) {
    let Url =URL_SERVICE+ "/tecnico/consultaHorasTrabajadas";
    return this.http.post(Url,consultaServiciosSemanas);
  }
  postRegistroServicio(trabajoSemanaTecnico:TrabajoSemanaTecnico) {
    let Url =URL_SERVICE+ "/tecnico/trabajoSemanaTecnico";
    return this.http.post(Url,trabajoSemanaTecnico);
  }
}

