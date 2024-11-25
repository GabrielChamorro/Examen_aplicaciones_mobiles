import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaCamaraPageRoutingModule } from './pagina-camara-routing.module';

import { PaginaCamaraPage } from './pagina-camara.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaCamaraPageRoutingModule
  ],
  declarations: [PaginaCamaraPage]
})
export class PaginaCamaraPageModule {}
