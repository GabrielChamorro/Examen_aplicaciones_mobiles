import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaEnviarAnuncioPage } from './pagina-enviar-anuncio.page';

const routes: Routes = [
  {
    path: '',
    component: PaginaEnviarAnuncioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginaEnviarAnuncioPageRoutingModule {}
