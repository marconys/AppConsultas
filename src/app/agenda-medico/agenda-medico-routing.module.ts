import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DadosMedicoPage } from './agenda-medico.page';

const routes: Routes = [
  {
    path: '',
    component: DadosMedicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DadosMedicoPageRoutingModule {}
