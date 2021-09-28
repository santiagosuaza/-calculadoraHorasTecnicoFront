import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarServicioTecnicoComponent } from './registrar-servicio-tecnico.component';

describe('RegistrarServicioTecnicoComponent', () => {
  let component: RegistrarServicioTecnicoComponent;
  let fixture: ComponentFixture<RegistrarServicioTecnicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarServicioTecnicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarServicioTecnicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
