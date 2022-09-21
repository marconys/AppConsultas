import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgendaHansPageRoutingModule } from './agenda-hans-routing.module';

import { AgendaHansPage } from './agenda-hans.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgendaHansPageRoutingModule
  ],
  declarations: [AgendaHansPage]
})
export class AgendaHansPageModule {}
