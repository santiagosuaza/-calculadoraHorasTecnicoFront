import { TrabajoSemanaTecnico } from 'src/app/model/TrabajoSemanaTecnico.model';

import { Component, OnInit } from '@angular/core';
import { TecnicoService } from '../../services/tecnico.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-consulta-tecnico-tiempo-trabajado',
  templateUrl: './consulta-tecnico-tiempo-trabajado.component.html',
  styleUrls: ['./consulta-tecnico-tiempo-trabajado.component.css']
})
export class ConsultaTecnicoTiempoTrabajadoComponent implements OnInit {
  response: boolean =false;
  trabajoSemanaTecnico: TrabajoSemanaTecnico;
  message: string = '';
  form: FormGroup;
  constructor(private tecnicoService: TecnicoService,){}

  ngOnInit(): void {
    this.createForm()
   

  }

  createForm(){
    this.form = new FormGroup ({
      id:  new FormControl('',[Validators.required]),
      semanaNumero: new FormControl('',[Validators.required])
    });
  }

 

  consultar(){
    this.tecnicoService.getConsultaHorasTrabajadas(this.form.value).subscribe((trabajoSemanaTecnico: any)=> {
      this.trabajoSemanaTecnico = trabajoSemanaTecnico;
    });
  
  
}
}
