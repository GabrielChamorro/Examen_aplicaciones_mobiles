import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginaJusticarAsistenciaPage } from './pagina-justicar-asistencia.page';

describe('PaginaJusticarAsistenciaPage', () => {
  let component: PaginaJusticarAsistenciaPage;
  let fixture: ComponentFixture<PaginaJusticarAsistenciaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaJusticarAsistenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
