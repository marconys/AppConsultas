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
    loadChildren: () => import('./medicos/medicos/medicos.module').then( m => m.MedicosPageModule)
  },
  {
    path: 'agenda-hans',
    loadChildren: () => import('./agendaHans/agenda-hans/agenda-hans.module').then( m => m.AgendaHansPageModule)
  },
  {
    path: 'agendaelias',
    loadChildren: () => import('./agendaElias/agendaelias/agendaelias.module').then( m => m.AgendaeliasPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
