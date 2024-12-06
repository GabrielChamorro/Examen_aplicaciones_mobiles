import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina-justicar-asistencia',
  templateUrl: './pagina-justicar-asistencia.page.html',
  styleUrls: ['./pagina-justicar-asistencia.page.scss'],
})
export class PaginaJusticarAsistenciaPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  public redirigirAsistencia(){
    this.router.navigate(['/','pagina-asistencia'])
  }

  ngOnInit() {
  }

}
