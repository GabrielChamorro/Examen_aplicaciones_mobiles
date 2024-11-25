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

  ngOnInit() {
  }

}
