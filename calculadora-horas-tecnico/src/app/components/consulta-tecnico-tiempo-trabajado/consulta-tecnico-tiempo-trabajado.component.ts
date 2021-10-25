import { TrabajoSemanaTecnico } from 'src/app/model/TrabajoSemanaTecnico.model';

import { Component, OnInit } from '@angular/core';
import { TecnicoService } from '../../services/tecnico.service';
import {  FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-consulta-tecnico-tiempo-trabajado',
  templateUrl: './consulta-tecnico-tiempo-trabajado.component.html',
  styleUrls: ['./consulta-tecnico-tiempo-trabajado.component.css']
})
export class ConsultaTecnicoTiempoTrabajadoComponent implements OnInit {
  response: boolean =false ;
  object: any;
  trabajoSemanaTecnico:  TrabajoSemanaTecnico;
  message: string = '';
  form: FormGroup;
  constructor(private tecnicoService: TecnicoService){}

  ngOnInit(): void {
    this.createForm()
   

  }

  createForm(){
    this.form = new FormGroup({
      idPersona:  new FormControl('',[Validators.required, Validators.maxLength(20)]),
      semanaNumero: new FormControl('',[Validators.required, Validators.maxLength(20)])
    });
  }

  consultar(){
    this.tecnicoService.getConsultaHorasTrabajadas(this.form.value).subscribe((trabajoSemanaTecnico: any)=> {
      this.trabajoSemanaTecnico = trabajoSemanaTecnico;
      this.message = '';
      this.response = true;
    });
  }
}
