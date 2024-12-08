import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-pagina-enviar-anuncio',
  templateUrl: './pagina-enviar-anuncio.page.html',
  styleUrls: ['./pagina-enviar-anuncio.page.scss'],
})
export class PaginaEnviarAnuncioPage implements OnInit {

  constructor(
    private router: Router,
    private firebaseService: FirebaseService
  ) { }
  contenido: string = ' ';
  fecha_publicacion: string = ' ';
  idClase: string = 'faltaImplementarRelacionTablasYPermanenciaLogin';
  publicado_por: string = 'faltaImplementarPermanenciaDeLogin';
  titulo: string = ' ';


  ngOnInit() {
    const date = new Date(); this.fecha_publicacion = date.toISOString();
  }

  public redirigirAsistencia(){
    this.router.navigate(['/','pagina-asistencia'])
  }


  agregarAnuncio() {
    alert("alo")
    if (
      this.contenido.trim(), 
      this.fecha_publicacion.trim(), 
      this.idClase.trim(), 
      this.publicado_por.trim(), 
      this.titulo.trim()
    ) {
      this.firebaseService.addItem('Anuncio', { 
          contenido: this.contenido,
          fecha_publicacion: this.fecha_publicacion,
          idClase: this.idClase,
          publicado_por: this.publicado_por,
          titulo: this.titulo 
        })
        .then(() => {
          console.log('Producto agregado con éxito');
          this.contenido = '';
          this.fecha_publicacion = '';
          this.idClase = '';
          this.publicado_por = '';
          this.titulo = '';
        })
        .catch((error) => {
          console.error('Error al agregar el Anuncio:', error);
        });
    } else {
      console.log('Un campo esta vacio');
    }
  }

  

}
