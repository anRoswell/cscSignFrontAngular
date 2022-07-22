import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametrosRoutingModule } from './parametros-routing.module';
import { SedesComponent } from './sedes/sedes.component';
import { ProfesionesComponent } from './profesiones/profesiones.component';
import { ReactiveFormsModule } from '@angular/forms';

// Ngx Modal
import { ModalModule } from 'ngx-bootstrap/modal';
import { CreateProfesionesComponent } from './profesiones/create-profesiones/create-profesiones.component';


@NgModule({
  declarations: [SedesComponent, ProfesionesComponent, CreateProfesionesComponent],
  imports: [
    CommonModule,
    ParametrosRoutingModule,
    ReactiveFormsModule,
    ModalModule 
  ]
})
export class ParametrosModule { }
