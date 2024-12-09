import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewWillEnter, ViewWillLeave } from '@ionic/angular';
import { FirebaseService } from '../services/firebase.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pagina-justicar-asistencia',
  templateUrl: './pagina-justicar-asistencia.page.html',
  styleUrls: ['./pagina-justicar-asistencia.page.scss'],
})
export class PaginaJusticarAsistenciaPage implements OnInit, ViewWillEnter, ViewWillLeave {

  id_clase: string = ' ';

  contenido: string = ' ';
  nombreAlumno: string = ' ';

  justificaciones: any[] = [];
  private justificacionesSubscription!: Subscription;

  asistencias: any[] = [];
  private clasesSubscription!: Subscription;


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
      this.nombreAlumno.trim()
    ) {
      this.firebaseService.addItem('JustificarAsistencia', { 
          contenido: this.contenido,
          nombreAlumno: this.nombreAlumno,
        })
        .then(() => {
          console.log('Justificacion agregado con éxito');
          this.contenido = '';
          this.nombreAlumno = '';;
        })
        .catch((error) => {
          console.error('Error al agregar el Justificacion:', error);
        });
    } else {
      console.log('Un campo esta vacio');
    }
  }



  ionViewWillEnter(): void {
    this.justificacionesSubscription = this.firebaseService.getData('JustificarAsistencia').subscribe(losDatos => {
      if(losDatos){
        this.justificaciones = losDatos;
        console.log(losDatos)
      }
    });

    this.clasesSubscription = this.firebaseService.getData('Asistencia').subscribe(losDatos => {
      if(losDatos){
        this.asistencias = losDatos;
        console.log(losDatos)
      }
    }); 
  }

  ionViewWillLeave(): void {
    this.justificacionesSubscription.unsubscribe();

    this.clasesSubscription.unsubscribe();
  }

  ngOnInit() {
  }

}
