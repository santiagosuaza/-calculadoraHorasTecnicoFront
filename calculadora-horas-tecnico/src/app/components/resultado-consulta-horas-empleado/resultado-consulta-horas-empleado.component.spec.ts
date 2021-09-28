import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoConsultaHorasEmpleadoComponent } from './resultado-consulta-horas-empleado.component';

describe('ResultadoConsultaHorasEmpleadoComponent', () => {
  let component: ResultadoConsultaHorasEmpleadoComponent;
  let fixture: ComponentFixture<ResultadoConsultaHorasEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultadoConsultaHorasEmpleadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadoConsultaHorasEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
