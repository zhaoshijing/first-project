import { NgModule } from '@angular/core';
import { ShareModule } from '../share/share.module';

import { HomeComponent } from './home.component';

import { HomeRoutingModule } from './home-routing.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    HomeRoutingModule,
    ShareModule
  ]
})
export class HomeModule { }
