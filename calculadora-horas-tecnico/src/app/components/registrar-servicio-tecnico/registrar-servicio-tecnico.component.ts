import { Component, OnInit } from '@angular/core';
import { TecnicoService } from '../../services/tecnico.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-registrar-servicio-tecnico',
  templateUrl: './registrar-servicio-tecnico.component.html',
  styleUrls: ['./registrar-servicio-tecnico.component.css']
})
export class RegistrarServicioTecnicoComponent implements OnInit {
  form: FormGroup;
  message: string = '';
  constructor(private tecnicoService: TecnicoService) { }

  ngOnInit(): void {
    this.createForm();
  }
  createForm(){
    this.form = new FormGroup({
      cedula: new FormControl('',[Validators.required]),
      identificacionServicio: new FormControl('',[Validators.required]),
      fechaInicial: new FormControl('',[Validators.required]),
      fechaFinal: new FormControl('',[Validators.required]),
    })
  }
  registrar(){
    this.tecnicoService.postRegistroServicio(this.form.value).subscribe(
      res => this.message = "Servicio Registrado",
      
      err => { 
        console.log(err);
      
        this.message = err.error.message
        
      }
      
    ); 
  }
}
