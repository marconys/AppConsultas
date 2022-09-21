import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgendaeliasPage } from './agendaelias.page';

const routes: Routes = [
  {
    path: '',
    component: AgendaeliasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgendaeliasPageRoutingModule {}
