import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './../../../guards/auth.guard';

import { AdminComponent } from './../admin.component';
import { FormComponent } from './form/form.component';
import { HistoryComponent } from './history/history.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {
    path: 'admin',
    // canActivate: [AuthGuard],
    component: AdminComponent,
    children: [
      {
        path: 'patients/list',
        component: ListComponent,
      },
      {
        path: 'patients/form',
        component: FormComponent,
      },
      {
        path: 'patients/history',
        component: HistoryComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientRoutingModule {}
