import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaEnviarAnuncioPageRoutingModule } from './pagina-enviar-anuncio-routing.module';

import { PaginaEnviarAnuncioPage } from './pagina-enviar-anuncio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaEnviarAnuncioPageRoutingModule
  ],
  declarations: [PaginaEnviarAnuncioPage]
})
export class PaginaEnviarAnuncioPageModule {}
