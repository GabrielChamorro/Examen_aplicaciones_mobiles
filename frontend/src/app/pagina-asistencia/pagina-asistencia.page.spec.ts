import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginaAsistenciaPage } from './pagina-asistencia.page';

describe('PaginaAsistenciaPage', () => {
  let component: PaginaAsistenciaPage;
  let fixture: ComponentFixture<PaginaAsistenciaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaAsistenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
