import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginaVerCursosPage } from './pagina-ver-cursos.page';

describe('PaginaVerCursosPage', () => {
  let component: PaginaVerCursosPage;
  let fixture: ComponentFixture<PaginaVerCursosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaVerCursosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
