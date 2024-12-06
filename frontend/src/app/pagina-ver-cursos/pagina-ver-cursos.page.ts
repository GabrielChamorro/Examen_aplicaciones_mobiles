import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina-ver-cursos',
  templateUrl: './pagina-ver-cursos.page.html',
  styleUrls: ['./pagina-ver-cursos.page.scss'],
})
export class PaginaVerCursosPage implements OnInit {

  constructor(private router: Router) { }

  public irCurso(){
    this.router.navigate(['/','pagina-asistencia']);
  }

  ngOnInit() {
  }

}
