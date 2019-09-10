import { NgModule } from '@angular/core';
import { ShareModule } from '../share/share.module';

import { DeviceComponent } from './device.component';
import { DeviceDetailComponent } from './device-detail/device-detail.component';
import { RegisterDeviceComponent } from './register-device/register-device.component';

import { DeviceRoutingModule } from './device-routing.module';

import { DeviceService } from './service/device.service';

@NgModule({
  declarations: [
    DeviceComponent,
    DeviceDetailComponent,
    RegisterDeviceComponent
  ],
  imports: [
    DeviceRoutingModule,
    ShareModule
  ],
  providers: [
    DeviceService
  ]
})
export class DeviceModule { }
