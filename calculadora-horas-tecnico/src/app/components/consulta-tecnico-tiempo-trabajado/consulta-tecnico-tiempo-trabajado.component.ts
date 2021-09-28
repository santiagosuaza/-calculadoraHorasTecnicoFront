import { Component, OnInit } from '@angular/core';
import { TecnicoService } from '../../services/tecnico.service';
import { ConsultaServiciosSemanas } from '../../model/ConsultaServiciosSemana.model';
import { TrabajoSemanaTecnico } from '../../model/TrabajoSemanaTecnico.model';

@Component({
  selector: 'app-consulta-tecnico-tiempo-trabajado',
  templateUrl: './consulta-tecnico-tiempo-trabajado.component.html',
  styleUrls: ['./consulta-tecnico-tiempo-trabajado.component.css']
})
export class ConsultaTecnicoTiempoTrabajadoComponent implements OnInit {
  response: boolean;
   message: string = '';
  form: FormGroup;
  constructor(
    private tecnicoService:TecnicoService,
    private consultaServiciosSemanas: ConsultaServiciosSemanas,
    public trabajoSemanaTecnico :TrabajoSemanaTecnico ) { }
  ngOnInit(): void {
    this.createForm()

  }

  createForm(){
    this.form = new FormGroup({
      idTechnician: new FormControl('',[Validators.required]),
      weekNumber: new FormControl('',[Validators.required])
    })
  }
  consultar(){
    this.tecnicoService.postConsultaHorasTrabajadas(this.consultaServiciosSemanas).subscribe((TrabajoSemanaTecnico: any) => 
    {this.trabajoSemanaTecnico =this.trabajoSemanaTecnico;});
    
  }

}
