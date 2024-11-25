import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaCamaraPage } from './pagina-camara.page';

const routes: Routes = [
  {
    path: '',
    component: PaginaCamaraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginaCamaraPageRoutingModule {}
