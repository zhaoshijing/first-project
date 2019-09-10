import { NgModule } from '@angular/core';
import { ShareModule } from '../share/share.module';
import { SheetComponent } from './sheet.component';
import { SheetDetailComponent } from './sheet-detail/sheet-detail.component';

import { SheetRoutingModule } from './sheet-routing.module';

import { SheetService } from './service/sheet.service';

@NgModule({
  declarations: [
    SheetComponent,
    SheetDetailComponent
  ],
  imports: [
    SheetRoutingModule,
    ShareModule
  ],
  providers: [
    SheetService
  ]
})
export class SheetModule { }
