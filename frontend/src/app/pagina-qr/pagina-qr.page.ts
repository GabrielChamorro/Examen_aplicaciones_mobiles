import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina-qr',
  templateUrl: './pagina-qr.page.html',
  styleUrls: ['./pagina-qr.page.scss'],
})
export class PaginaQrPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  public redirigirAsistencia(){
    this.router.navigate(['/','pagina-asistencia'])
  }

  ngOnInit() {
  }

}
