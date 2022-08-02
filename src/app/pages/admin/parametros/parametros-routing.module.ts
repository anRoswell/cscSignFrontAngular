import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Componente
import { AdminComponent } from '../admin.component';
import { EmpresasComponent } from './empresas/empresas.component';
import { ProfesionesComponent } from './profesiones/profesiones.component';
import { SedesComponent } from './sedes/sedes.component';

const routes: Routes = [
  {
    path: 'admin',
    // canActivate: [AuthGuard],
    component: AdminComponent,
    children: [
      { path: 'parametros/empresas', component: EmpresasComponent },
      { path: 'parametros/profesiones', component: ProfesionesComponent },
      { path: 'parametros/sedes', component: SedesComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrosRoutingModule { }
