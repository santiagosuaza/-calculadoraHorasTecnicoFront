import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaTecnicoTiempoTrabajadoComponent } from './consulta-tecnico-tiempo-trabajado.component';

describe('ConsultaTecnicoTiempoTrabajadoComponent', () => {
  let component: ConsultaTecnicoTiempoTrabajadoComponent;
  let fixture: ComponentFixture<ConsultaTecnicoTiempoTrabajadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaTecnicoTiempoTrabajadoComponent ]
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
});
