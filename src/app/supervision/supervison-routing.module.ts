import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SupervisionComponent } from './supervison.component';

const routes: Routes = [
  {
    path: '',
    component: SupervisionComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupervisionRoutingModule { }
