import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgendaHansPage } from './agenda-hans.page';

const routes: Routes = [
  {
    path: '',
    component: AgendaHansPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgendaHansPageRoutingModule {}
