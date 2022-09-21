import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgendaeliasPageRoutingModule } from './agendaelias-routing.module';

import { AgendaeliasPage } from './agendaelias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgendaeliasPageRoutingModule
  ],
  declarations: [AgendaeliasPage]
})
export class AgendaeliasPageModule {}
