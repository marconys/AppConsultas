import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DadosMedicoPageRoutingModule } from './agenda-medico-routing.module';

import { DadosMedicoPage } from './agenda-medico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DadosMedicoPageRoutingModule
  ],
  declarations: [DadosMedicoPage]
})
export class DadosMedicoPageModule {}
