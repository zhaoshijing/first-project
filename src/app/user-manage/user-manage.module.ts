import { NgModule } from '@angular/core';
import { ShareModule } from '../share/share.module';

import { UserManageComponent } from './user-manage.component';
import { AddUserManageComponent } from './add-user-manage/add-user-manage.component';

import { UserManageRoutingModule } from './user-manage-routing.module';

import { UserService } from './service/user.service';


@NgModule({
  declarations: [
    UserManageComponent,
    AddUserManageComponent
  ],
  imports: [
    UserManageRoutingModule,
    ShareModule
  ],
  providers: [
    UserService
  ]
})
export class UserManageModule { }
