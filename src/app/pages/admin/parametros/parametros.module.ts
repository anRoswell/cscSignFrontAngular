import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametrosRoutingModule } from './parametros-routing.module';
import { ProfesionesComponent } from './profesiones/profesiones.component';
import { SedesComponent } from './sedes/sedes.component';


@NgModule({
  declarations: [ProfesionesComponent, SedesComponent],
  imports: [
    CommonModule,
    ParametrosRoutingModule
  ]
})
export class ParametrosModule { }
