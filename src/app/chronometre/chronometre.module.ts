import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChronometrePageRoutingModule } from './chronometre-routing.module';

import { ChronometrePage } from './chronometre.page';
import { ToTimePipe } from './to-time.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChronometrePageRoutingModule
  ],
  declarations: [ChronometrePage, ToTimePipe]
})
export class ChronometrePageModule {}
