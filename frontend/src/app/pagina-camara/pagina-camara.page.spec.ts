import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginaCamaraPage } from './pagina-camara.page';

describe('PaginaCamaraPage', () => {
  let component: PaginaCamaraPage;
  let fixture: ComponentFixture<PaginaCamaraPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaCamaraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
