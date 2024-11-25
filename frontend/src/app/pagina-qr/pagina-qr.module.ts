import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaQrPageRoutingModule } from './pagina-qr-routing.module';

import { PaginaQrPage } from './pagina-qr.page';
import { QrCodeModule } from 'ng-qrcode';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaQrPageRoutingModule,
    QrCodeModule
    
  ],
  declarations: [PaginaQrPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PaginaQrPageModule {}
