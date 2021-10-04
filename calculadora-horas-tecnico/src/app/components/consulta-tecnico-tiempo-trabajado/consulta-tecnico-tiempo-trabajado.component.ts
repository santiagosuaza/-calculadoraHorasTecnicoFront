import { Component, OnInit } from '@angular/core';
import { TecnicoService } from '../../services/tecnico.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { TrabajoSemanaTecnico } from 'src/app/model/TrabajoSemanaTecnico.model';

@Component({
  selector: 'app-consulta-tecnico-tiempo-trabajado',
  templateUrl: './consulta-tecnico-tiempo-trabajado.component.html',
  styleUrls: ['./consulta-tecnico-tiempo-trabajado.component.css']
})
export class ConsultaTecnicoTiempoTrabajadoComponent implements OnInit {
  response: boolean =false;
  trabajoSemanaTecnico: TrabajoSemanaTecnico;
  message: string = '';
  form!: FormGroup;
  constructor(private tecnicoService: TecnicoService,
    private fb: FormBuilder){}

  ngOnInit(): void {
    this.createForm()
   

  }

  createForm(){
    this.form = this.fb.group ({
      idTecnico: [],
      semanaNumero: []
    });
  }

 

  consultar(){
    this.tecnicoService.getConsultaHorasTrabajadas(this.form.value).subscribe((trabajoSemanaTecnico: any)=> {
      this.trabajoSemanaTecnico = trabajoSemanaTecnico;
    });
  
  
}
}
