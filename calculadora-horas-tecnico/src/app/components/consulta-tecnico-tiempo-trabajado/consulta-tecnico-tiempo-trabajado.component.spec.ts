import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ConsultaTecnicoTiempoTrabajadoComponent } from './consulta-tecnico-tiempo-trabajado.component';

fdescribe('ConsultaTecnicoTiempoTrabajadoComponent', () => {
  let component: ConsultaTecnicoTiempoTrabajadoComponent;
  let fixture: ComponentFixture<ConsultaTecnicoTiempoTrabajadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaTecnicoTiempoTrabajadoComponent],
      providers:[],
      imports: [ReactiveFormsModule, HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaTecnicoTiempoTrabajadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('[Form Validations]',() =>{
    describe('Control "id"',() =>{
      it('si esta vacio no funciona',()=>{
        const personIdControl = component.createForm.get('id');
        const emptyValue ='';

        personIdControl.setValue(emptyValue);
        expect(personIdControl.errors.required).toBeTruthy();
        expect(personIdControl.valid).toBeFalse();
       })
      })
      
    })
  })

