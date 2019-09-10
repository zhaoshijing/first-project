import { NgModule } from '@angular/core';
import { ShareModule } from '../share/share.module';

import { PageComponent } from './page.component';

import { PageRoutingModule } from './page-routing.module';


@NgModule({
  declarations: [
    PageComponent
  ],
  imports: [
    PageRoutingModule,
    ShareModule
  ]
})
export class PageModule { }
