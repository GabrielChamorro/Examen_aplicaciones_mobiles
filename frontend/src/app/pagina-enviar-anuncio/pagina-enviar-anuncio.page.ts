import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';
import { ViewWillEnter, ViewWillLeave } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagina-enviar-anuncio',
  templateUrl: './pagina-enviar-anuncio.page.html',
  styleUrls: ['./pagina-enviar-anuncio.page.scss'],
})
export class PaginaEnviarAnuncioPage implements OnInit, ViewWillEnter, ViewWillLeave {


  contenido: string = ' ';
  fecha_publicacion: string = ' ';
  idClase: string = 'faltaImplementarRelacionTablasYPermanenciaLogin';
  publicado_por: string = 'faltaImplementarPermanenciaDeLogin';
  titulo: string = ' ';

  id_clase: string = ' ';

  anuncios: any[] = [];
  private anunciosSubscription!: Subscription;

  
  constructor(
    private router: Router,
    private firebaseService: FirebaseService,
    private Arouter: ActivatedRoute
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




  eliminarAnuncio(id: string) {
    alert("alo")
    
    this.firebaseService.deleteItem('Anuncio', id)
    .then(() => {
      console.log('Anuncio eliminado con exito');
    })
    .catch((error) => {
      console.error('Error al eliminar el Anuncio:', error);
    });
    
  }

  ionViewWillEnter(): void {
    this.anunciosSubscription = this.firebaseService.getData('Anuncio').subscribe(losDatos => {
      if(losDatos){
        this.anuncios = losDatos;
        console.log(losDatos)
      }
    });
    
  }


  ionViewWillLeave(): void {
    this.anunciosSubscription.unsubscribe();
  }


  ngOnInit() {
    const date = new Date(); this.fecha_publicacion = date.toISOString();
    
  }

}
