import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EmpresasComponent } from './empresas/empresas.component';
import { ParametrosRoutingModule } from './parametros-routing.module';
import { ProfesionesComponent } from './profesiones/profesiones.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SedesComponent } from './sedes/sedes.component';

// Ngx Modal
import { CreateProfesionesComponent } from './profesiones/create-profesiones/create-profesiones.component';
import { ModalModule } from 'ngx-bootstrap/modal';

// Font Awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SedeFormComponent } from './sedes/sede-form/sede-form.component';
import { EmpresasFormComponent } from './empresas/empresas-form/empresas-form.component';

@NgModule({
  declarations: [
    SedesComponent,
    ProfesionesComponent,
    CreateProfesionesComponent,
    SedeFormComponent,
    EmpresasComponent,
    EmpresasFormComponent,
  ],
  imports: [
    CommonModule,
    ParametrosRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    ModalModule,
  ],
})
export class ParametrosModule {}
