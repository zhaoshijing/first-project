import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import {  NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

import { FormsModule } from '@angular/forms';

const shareModules = [
  NzButtonModule,
  NzTableModule,
  CommonModule,
  NgxEchartsModule,
  NzDropDownModule,
  NzMenuModule,
  NzIconModule,
  NzBreadCrumbModule,
  NzGridModule,
  NzFormModule,
  NzInputModule,
  NzLayoutModule,
  FormsModule
];

@NgModule({
  imports: [
    ...shareModules
  ],
  exports: [
    ...shareModules
  ]
})
export class ShareModule { }
