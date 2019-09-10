import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SheetComponent } from './sheet.component';
import { SheetDetailComponent } from './sheet-detail/sheet-detail.component';

const routes: Routes = [
  {
    path: '',
    component: SheetComponent
  },
  {
    path: ':id',
    component: SheetDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SheetRoutingModule { }
