import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChronometrePage } from './chronometre.page';

const routes: Routes = [
  {
    path: '',
    component: ChronometrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChronometrePageRoutingModule {}
