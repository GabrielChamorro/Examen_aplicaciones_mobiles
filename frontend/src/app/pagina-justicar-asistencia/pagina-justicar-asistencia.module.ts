import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaJusticarAsistenciaPageRoutingModule } from './pagina-justicar-asistencia-routing.module';

import { PaginaJusticarAsistenciaPage } from './pagina-justicar-asistencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaJusticarAsistenciaPageRoutingModule
  ],
  declarations: [PaginaJusticarAsistenciaPage]
})
export class PaginaJusticarAsistenciaPageModule {}
