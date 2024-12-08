import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';
import { ViewWillEnter, ViewWillLeave } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagina-ver-cursos',
  templateUrl: './pagina-ver-cursos.page.html',
  styleUrls: ['./pagina-ver-cursos.page.scss'],
})
export class PaginaVerCursosPage implements OnInit, ViewWillEnter, ViewWillLeave {
  clases: any[] = [];
  private clasesSubscription!: Subscription;
  constructor(
    private router: Router,
    private firebaseService: FirebaseService,
    
  ) { 
    
    
  }
  




  ngOnInit(): void { 
    
  }

  public redirigirAsistencia(id_clase: string){
    this.router.navigate(['/','pagina-asistencia',id_clase])
  }


  ionViewWillEnter(): void {
    this.clasesSubscription = this.firebaseService.getData('Clase').subscribe(losDatos => {
      if(losDatos){
        this.clases = losDatos;
        console.log(losDatos)
      }
    }); 
        
  }

  ionViewWillLeave(): void {
    this.clasesSubscription.unsubscribe();
    
  }


}
