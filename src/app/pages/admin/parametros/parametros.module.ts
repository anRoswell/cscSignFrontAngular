import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametrosRoutingModule } from './parametros-routing.module';
import { SedesComponent } from './sedes/sedes.component';
import { ProfesionesComponent } from './profesiones/profesiones.component';
import { ReactiveFormsModule } from '@angular/forms';

// Ngx Modal
import { ModalModule } from 'ngx-bootstrap/modal';
import { CreateProfesionesComponent } from './profesiones/create-profesiones/create-profesiones.component';

// Font Awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SedeFormComponent } from './sedes/sede-form/sede-form.component';

@NgModule({
  declarations: [
    SedesComponent,
    ProfesionesComponent,
    CreateProfesionesComponent,
    SedeFormComponent,
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
