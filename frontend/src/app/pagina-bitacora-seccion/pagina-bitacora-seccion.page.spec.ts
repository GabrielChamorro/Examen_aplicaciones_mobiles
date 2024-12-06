import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginaBitacoraSeccionPage } from './pagina-bitacora-seccion.page';

describe('PaginaBitacoraSeccionPage', () => {
  let component: PaginaBitacoraSeccionPage;
  let fixture: ComponentFixture<PaginaBitacoraSeccionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaBitacoraSeccionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
