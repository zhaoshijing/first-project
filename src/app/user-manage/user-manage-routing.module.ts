import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserManageComponent } from './user-manage.component';
import { AddUserManageComponent } from './add-user-manage/add-user-manage.component';

const routes: Routes = [
  {
    path: '',
    component: UserManageComponent
  },
  {
    path: 'add-user',
    component: AddUserManageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManageRoutingModule { }
