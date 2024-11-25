import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'inicio-sesion',
    pathMatch: 'full'
  },
  {
    path: 'inicio-sesion',
    loadChildren: () => import('./inicio-sesion/inicio-sesion.module').then( m => m.InicioSesionPageModule)
  },
  {
    path: 'pagina-qr',
    loadChildren: () => import('./pagina-qr/pagina-qr.module').then( m => m.PaginaQrPageModule)
  },
  {
    path: 'pagina-asistencia',
    loadChildren: () => import('./pagina-asistencia/pagina-asistencia.module').then( m => m.PaginaAsistenciaPageModule)
  },
  {
    path: 'pagina-camara',
    loadChildren: () => import('./pagina-camara/pagina-camara.module').then( m => m.PaginaCamaraPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
