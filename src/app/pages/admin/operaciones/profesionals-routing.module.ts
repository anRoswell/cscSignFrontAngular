import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from '../admin.component';
import { CreateProfesionalComponent } from './create-profesional/create-profesional.component';


const routes: Routes = [
  {
    path: 'admin',
    // canActivate: [AuthGuard],
    component: AdminComponent,
    children: [
      { path: 'operacion/createprofesional', component: CreateProfesionalComponent },
    ],
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfesionalsRoutingModule {
  
 }
