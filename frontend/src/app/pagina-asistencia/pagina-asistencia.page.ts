import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pagina-asistencia',
  templateUrl: './pagina-asistencia.page.html',
  styleUrls: ['./pagina-asistencia.page.scss'],
})
export class PaginaAsistenciaPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  public redirigirQr(){
    this.router.navigate(['/','pagina-qr'])
  }

  public redirigirAnuncio(){
    this.router.navigate(['/','pagina-enviar-anuncio'])
  }

  public redirigirJustificar(){
    this.router.navigate(['/','pagina-justicar-asistencia'])
  }

  public redirigirBitacora(){
    this.router.navigate(['/','pagina-bitacora-seccion'])
  }






  public redirigirVerCursos(){
    this.router.navigate(['/','pagina-ver-cursos'])
  }

  ngOnInit() {
  }

}
