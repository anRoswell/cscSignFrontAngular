import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ErrorComponent } from './pages/error/error.component';

import { AuthGuard } from './guards/auth.guard';

import { ReportRoutingModule } from './pages/admin/report/report-routing.module';
import { ProfesionalsRoutingModule } from './pages/admin/operaciones/profesionals-routing.module';
import { ParametrosRoutingModule } from './pages/admin/parametros/parametros-routing.module';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true, relativeLinkResolution: 'legacy' }),
    ReportRoutingModule,
    ProfesionalsRoutingModule,
    ParametrosRoutingModule
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
