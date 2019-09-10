import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageComponent } from './page.component';
const routes: Routes = [
  {
    path: '',
    component: PageComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: '../home/home.module#HomeModule'
      },
      {
        path: 'supervison',
        loadChildren: '../supervision/supervision.module#SupervisionModule'
      },
      {
        path: 'monitor',
        loadChildren: '../monitor/monitor.module#MonitorModule'
      },
      {
        path: 'device',
        loadChildren: '../device/device.module#DeviceModule'
      },
      {
        path: 'sheet',
        loadChildren: '../sheet/sheet.module#SheetModule'
      },
      {
        path: 'user-manage',
        loadChildren: '../user-manage/user-manage.module#UserManageModule'
      },
      {
        path: 'about',
        loadChildren: '../about/about.module#AboutModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
