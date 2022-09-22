import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'medicos',
    loadChildren: () => import('./medicos/medicos.module').then( m => m.MedicosPageModule)
  },

  {
    path: 'agenda-medico',
    loadChildren: () => import('./agenda-medico/agenda-medico.module').then( m => m.DadosMedicoPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
