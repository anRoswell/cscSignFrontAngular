import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Componente
import { AdminComponent } from '../admin.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { ProfesionesComponent } from './profesiones/profesiones.component';
import { SedesComponent } from './sedes/sedes.component';

const routes: Routes = [
  {
    path: 'admin',
    // canActivate: [AuthGuard],
    component: AdminComponent,
    children: [
      { path: 'parametros/profesiones', component: ProfesionesComponent },
      { path: 'parametros/sedes', component: SedesComponent },
      { path: 'parametros/empresas', component: EmpresaComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrosRoutingModule { }
