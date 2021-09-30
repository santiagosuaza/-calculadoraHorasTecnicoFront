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
  object: any;
  message: string = '';
  form: FormGroup
  constructor(private tecnicoService: TecnicoService){ }

  ngOnInit(): void {
    this.createForm()

  }

  createForm(){
    this.form = new FormGroup({
      idTecnico: new FormControl('',[Validators.required]),
      semanaNumero: new FormControl('',[Validators.required])
    });
  }

 

  async consultar(){
    this.tecnicoService.getConsultaHorasTrabajadas(this.form.value).subscribe(
      res => { 
      this.message = ''
      this.response = true,
      this.object = res.workingH
    },
    err => {
      this.message = `There's a problem in your Request`
    }
  )
}
}
