import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pagina-qr',
  templateUrl: './pagina-qr.page.html',
  styleUrls: ['./pagina-qr.page.scss'],
})
export class PaginaQrPage implements OnInit {

  id_clase: string = ' ';

  constructor(
    private router: Router,
    private Arouter: ActivatedRoute
  ) {
    Arouter.paramMap.subscribe(parametros => {
      this.id_clase = (parametros.get("id_clase") as string);
    });
  }

  public redirigirAsistencia(){
    this.router.navigate(['/','pagina-asistencia',this.id_clase])
  }

  ngOnInit() {
  }

}
