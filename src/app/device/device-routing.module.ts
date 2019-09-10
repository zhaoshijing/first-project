import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeviceComponent } from './device.component';
import { DeviceDetailComponent } from './device-detail/device-detail.component';
import { RegisterDeviceComponent } from './register-device/register-device.component';

const routes: Routes = [
  {
    path: '',
    component: DeviceComponent
  },
  {
    path: 'register-device',
    component: RegisterDeviceComponent
  },
  {
    path: ':id',
    component: DeviceDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeviceRoutingModule { }
