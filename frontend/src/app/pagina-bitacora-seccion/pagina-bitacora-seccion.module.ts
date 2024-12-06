import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaBitacoraSeccionPageRoutingModule } from './pagina-bitacora-seccion-routing.module';

import { PaginaBitacoraSeccionPage } from './pagina-bitacora-seccion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaBitacoraSeccionPageRoutingModule
  ],
  declarations: [PaginaBitacoraSeccionPage]
})
export class PaginaBitacoraSeccionPageModule {}
