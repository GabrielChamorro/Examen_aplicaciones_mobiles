import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaVerCursosPageRoutingModule } from './pagina-ver-cursos-routing.module';

import { PaginaVerCursosPage } from './pagina-ver-cursos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaVerCursosPageRoutingModule
  ],
  declarations: [PaginaVerCursosPage]
})
export class PaginaVerCursosPageModule {}
