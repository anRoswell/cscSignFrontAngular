import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from '../admin.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { EditComponent } from './edit/edit.component';
import { NewUserComponent } from './new-user/new-user.component';

const routes: Routes = [
  {
    path: 'admin',
    // canActivate: [AuthGuard],
    component: AdminComponent,
    children: [
      { path: 'user/edit', component: EditComponent },
      { path: 'user/changePassword', component: ChangePasswordComponent },
      { path: 'user/newUser', component: NewUserComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
