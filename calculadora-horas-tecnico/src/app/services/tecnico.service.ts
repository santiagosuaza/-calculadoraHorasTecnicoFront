import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICE } from '../config/config';


@Injectable({
    providedIn: 'root'
})
export class TecnicoService {


  constructor(private http:HttpClient) { }

  getConsultaHorasTrabajadas(body: {idPersona: string; semanaNumero: string; }){
    let Url =URL_SERVICE+ "/tecnico/"+body.idPersona+"/"+body.semanaNumero;
    return this.http.get<any>(Url);
  }
  postRegistroServicio(body: any) {
    let Url =URL_SERVICE+ "/servicio";
    return this.http.post<any>(Url,body);
  }
}

