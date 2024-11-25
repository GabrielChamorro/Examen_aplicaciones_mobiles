import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaAsistenciaPageRoutingModule } from './pagina-asistencia-routing.module';

import { PaginaAsistenciaPage } from './pagina-asistencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaAsistenciaPageRoutingModule
  ],
  declarations: [PaginaAsistenciaPage]
})
export class PaginaAsistenciaPageModule {}
