import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametrosRoutingModule } from './parametros-routing.module';
import { SedesComponent } from './sedes/sedes.component';
import { ProfesionesComponent } from './profesiones/profesiones.component';
import { ReactiveFormsModule } from '@angular/forms';

// Ngx Modal
import { ModalModule } from 'ngx-bootstrap/modal';
import { EmpresaComponent } from './empresa/empresa.component';
import { ProfesionesFormComponent } from './profesiones/profesiones-form/profesiones-form.component';


@NgModule({
  declarations: [SedesComponent, ProfesionesComponent, EmpresaComponent, ProfesionesFormComponent],
  imports: [
    CommonModule,
    ParametrosRoutingModule,
    ReactiveFormsModule,
    ModalModule 
  ]
})
export class ParametrosModule { }
