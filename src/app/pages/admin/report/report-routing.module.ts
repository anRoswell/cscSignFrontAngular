import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './../../../guards/auth.guard';
import { AdminComponent } from './../admin.component';
import { ReportSolicitudServiciosComponent } from './report-solicitud-servicios/report-solicitud-servicios.component';

const routes: Routes = [
  {
    path: 'admin',
    // canActivate: [AuthGuard],
    component: AdminComponent,
    children: [
      {
        path: 'reportes/solicitudes',
        component: ReportSolicitudServiciosComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportRoutingModule {}
