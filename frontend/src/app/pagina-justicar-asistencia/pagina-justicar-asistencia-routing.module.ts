import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaJusticarAsistenciaPage } from './pagina-justicar-asistencia.page';

const routes: Routes = [
  {
    path: '',
    component: PaginaJusticarAsistenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginaJusticarAsistenciaPageRoutingModule {}
