import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ErrorComponent } from './pages/error/error.component';

import { AuthGuard } from './guards/auth.guard';

import { SettingsRoutingModule } from './pages/admin/settings/settings.routing';
import { ReportRoutingModule } from './pages/admin/report/report-routing.module';
import { StatisticsRoutingModule } from './pages/admin/statistics/statistics.routing';
import { PatientRoutingModule } from './pages/admin/patients/patient-rounting.module';
import { ProfesionalsRoutingModule } from './pages/admin/operaciones/profesionals-routing.module';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'admin',
    // canActivate: [AuthGuard],
    redirectTo: '/admin/estadisticas/main',
  },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true }),
    SettingsRoutingModule,
    ReportRoutingModule,
    StatisticsRoutingModule,
    PatientRoutingModule,
    ProfesionalsRoutingModule
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
