import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICE } from '../config/config';


@Injectable({
    providedIn: 'root'
})
export class TecnicoService {


  constructor(private http:HttpClient) { }

  getConsultaHorasTrabajadas(body: { idTecnico: any; semanaNumero: any; }){
    let Url =URL_SERVICE+ "/tecnico/"+body.idTecnico+"/"+body.semanaNumero;
    return this.http.get(Url);
  }
  postRegistroServicio(body: any) {
    let Url =URL_SERVICE+ "/servicio";
    return this.http.post<any>(Url,body);
  }
}

