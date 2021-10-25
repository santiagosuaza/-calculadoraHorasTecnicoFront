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
        const personIdControl = component.form.get('idPersona');
        const emptyValue ='';

        personIdControl.setValue(emptyValue);
        expect(personIdControl.errors.required).toBeTruthy();
        expect(personIdControl.valid).toBeFalse();
       })
      it ('si tiene mas de 20 caracteres no es valido ', () => {
        const personIdControl = component.form.get('idPersona')
        const invalidLenght ="123456789123456789123";
        personIdControl.setValue(invalidLenght);
        expect(personIdControl.valid).toBeFalse();
      });
      it ('si tiene menos de 20 caracteres   es valido ', () => {
        const personIdControl = component.form.get('idPersona')
        const invalidLenght ="12";
        personIdControl.setValue(invalidLenght);
        expect(personIdControl.valid).toBeTrue();
      });
      })
      
    })
  });

