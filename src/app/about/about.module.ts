import { NgModule } from '@angular/core';
import { ShareModule } from '../share/share.module';

import { AboutComponent } from './about.component';

import { AboutRoutingModule } from './about-routing.module';


@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    AboutRoutingModule,
    ShareModule
  ]
})
export class AboutModule { }
