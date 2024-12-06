import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaBitacoraSeccionPage } from './pagina-bitacora-seccion.page';

const routes: Routes = [
  {
    path: '',
    component: PaginaBitacoraSeccionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginaBitacoraSeccionPageRoutingModule {}
