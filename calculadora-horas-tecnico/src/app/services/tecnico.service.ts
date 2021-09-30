import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICE } from '../config/config';


@Injectable({
    providedIn: 'root'
})
export class TecnicoService {
  private URL = 'http://localhost:3000/api/';

  constructor(private http:HttpClient) { }

  getConsultaHorasTrabajadas(body: { idTecnico: any; numeroSemana: any; }){
    return this.http.get<any>(`${this.URL}calculate/?idTecnico=${body.idTecnico}&numeroSemana=${body.numeroSemana}`);
  }
  postRegistroServicio(body: any) {
    let Url =URL_SERVICE+ "/ HoraReportada";
    return this.http.post<any>(Url,body);
  }
}

