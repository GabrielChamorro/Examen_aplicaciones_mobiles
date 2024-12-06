import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina-bitacora-seccion',
  templateUrl: './pagina-bitacora-seccion.page.html',
  styleUrls: ['./pagina-bitacora-seccion.page.scss'],
})
export class PaginaBitacoraSeccionPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  public redirigirAsistencia(){
    this.router.navigate(['/','pagina-asistencia'])
  }

  ngOnInit() {
  }

}
