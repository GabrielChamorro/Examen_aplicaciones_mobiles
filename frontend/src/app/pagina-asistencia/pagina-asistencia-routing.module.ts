import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaAsistenciaPage } from './pagina-asistencia.page';

const routes: Routes = [
  {
    path: '',
    component: PaginaAsistenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginaAsistenciaPageRoutingModule {}
