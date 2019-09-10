import { NgModule } from '@angular/core';

import { ShareModule } from '../share/share.module';

import { MonitorComponent } from './monitor.component';

import { MonitorRoutingModule } from './monitor-routing.module';

import { MonitorService } from './service/monitor.service';


@NgModule({
  declarations: [
    MonitorComponent
  ],
  imports: [
    MonitorRoutingModule,
    ShareModule
  ],
  providers: [
    MonitorService
  ]
})
export class MonitorModule { }
