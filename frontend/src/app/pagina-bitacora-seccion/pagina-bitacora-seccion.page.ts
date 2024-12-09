import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';


@Component({
  selector: 'app-pagina-bitacora-seccion',
  templateUrl: './pagina-bitacora-seccion.page.html',
  styleUrls: ['./pagina-bitacora-seccion.page.scss'],
})
export class PaginaBitacoraSeccionPage implements OnInit {

  id_clase: string = ' ';
  contenido: string = ' ';
  profesor: string = 'falta integrar bien tema de que el login traiga los datos';
  titulo: string = ' ';

  constructor(
    private router: Router,
    private Arouter: ActivatedRoute,
    private firebaseService: FirebaseService,
  ) { 
    Arouter.paramMap.subscribe(parametros => {
      this.id_clase = (parametros.get("id_clase") as string);
    });
  }

  public redirigirAsistencia(){
    this.router.navigate(['/','pagina-asistencia',this.id_clase])
  }

  agregarAnuncio() {
    alert("alo")
    if (
      this.id_clase.trim(), 
      this.contenido.trim(), 
      this.profesor.trim(), 
      this.titulo.trim() 
    ) {
      this.firebaseService.addItem('Bitacora', { 
          clase: this.id_clase,
          contenido: this.contenido,
          profesor: this.profesor,
          titulo: this.titulo
        })
        .then(() => {
          console.log('Producto agregado con éxito');
          this.contenido = '';
          this.id_clase = '';
          this.profesor = '';
          this.titulo = '';
        })
        .catch((error) => {
          console.error('Error al agregar el Anuncio:', error);
        });
    } else {
      console.log('Un campo esta vacio');
    }
  }

  ngOnInit() {
  }

}
