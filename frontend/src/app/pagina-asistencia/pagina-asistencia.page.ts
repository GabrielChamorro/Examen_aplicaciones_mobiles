import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';
import { ViewWillEnter, ViewWillLeave } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-pagina-asistencia',
  templateUrl: './pagina-asistencia.page.html',
  styleUrls: ['./pagina-asistencia.page.scss'],
})
export class PaginaAsistenciaPage implements OnInit, ViewWillEnter, ViewWillLeave {
  private id_clase_p: string = ' '
  asistencias: any[] = [];
  
  asiste: boolean = false;




  constructor(
    private router: Router,
    private firebaseService: FirebaseService,
    private Arouter: ActivatedRoute,
    
  ) { 
    
  }

  
  private clasesSubscription!: Subscription;

  public redirigirQr(){
    this.router.navigate(['/','pagina-qr',this.id_clase_p])
  }

  public redirigirAnuncio(){
    this.router.navigate(['/','pagina-enviar-anuncio',this.id_clase_p])
  }

  public redirigirJustificar(){
    this.router.navigate(['/','pagina-justicar-asistencia',this.id_clase_p])
  }

  public redirigirBitacora(){
    this.router.navigate(['/','pagina-bitacora-seccion',this.id_clase_p])
  }






  public redirigirVerCursos(){
    this.router.navigate(['/','pagina-ver-cursos'])
  }




  asistenciaTrue(clase: string, idAlumno: string, nombreAlumno: string, id: string ) {
    alert("alo")
    if (
      clase.trim(),
      idAlumno.trim(),
      nombreAlumno.trim()
    ) {
      this.firebaseService.putItem('Asistencia', { 
          asiste : true,
          clase,
          idAlumno,
          nombreAlumno 
        }, id )
        .then(() => {
          console.log('Producto agregado con éxito');

        })
        .catch((error) => {
          console.error('Error al agregar el Anuncio:', error);
        });
    } else {
      console.log('Un campo esta vacio');
    }
  }



  asistenciaFalse(clase: string, idAlumno: string, nombreAlumno: string, id: string ) {
    alert("alo")
    if (
      clase.trim(),
      idAlumno.trim(),
      nombreAlumno.trim()
    ) {
      this.firebaseService.putItem('Asistencia', { 
          asiste : false,
          clase,
          idAlumno,
          nombreAlumno 
        }, id )
        .then(() => {
          console.log('Producto agregado con éxito');

        })
        .catch((error) => {
          console.error('Error al agregar el Anuncio:', error);
        });
    } else {
      console.log('Un campo esta vacio');
    }
  }


  ngOnInit() {
    this.Arouter.paramMap.subscribe(parametros => { this.id_clase_p = parametros.get('id_clase') ?? ''; });
  }


  ionViewWillEnter(): void {
    this.clasesSubscription = this.firebaseService.getData('Asistencia').subscribe(losDatos => {
      if(losDatos){
        this.asistencias = losDatos;
        console.log(losDatos)
      }
    }); 
    
    
  }


  ionViewWillLeave(): void {
    this.clasesSubscription.unsubscribe();
    
  }
  
}
