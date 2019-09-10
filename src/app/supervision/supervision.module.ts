import { NgModule } from '@angular/core';
import { ShareModule } from '../share/share.module';

import { SupervisionComponent } from './supervison.component';

import { SupervisionRoutingModule } from './supervison-routing.module';


@NgModule({
  declarations: [
    SupervisionComponent
  ],
  imports: [
    SupervisionRoutingModule,
    ShareModule
  ]
})
export class SupervisionModule { }
