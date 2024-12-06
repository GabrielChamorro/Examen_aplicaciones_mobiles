import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaVerCursosPage } from './pagina-ver-cursos.page';

const routes: Routes = [
  {
    path: '',
    component: PaginaVerCursosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginaVerCursosPageRoutingModule {}
