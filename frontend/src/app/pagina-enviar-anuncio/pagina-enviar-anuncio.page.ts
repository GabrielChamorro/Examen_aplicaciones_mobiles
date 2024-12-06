import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina-enviar-anuncio',
  templateUrl: './pagina-enviar-anuncio.page.html',
  styleUrls: ['./pagina-enviar-anuncio.page.scss'],
})
export class PaginaEnviarAnuncioPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  public redirigirAsistencia(){
    this.router.navigate(['/','pagina-asistencia'])
  }

  ngOnInit() {
  }

}
