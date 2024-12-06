import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginaEnviarAnuncioPage } from './pagina-enviar-anuncio.page';

describe('PaginaEnviarAnuncioPage', () => {
  let component: PaginaEnviarAnuncioPage;
  let fixture: ComponentFixture<PaginaEnviarAnuncioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaEnviarAnuncioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
