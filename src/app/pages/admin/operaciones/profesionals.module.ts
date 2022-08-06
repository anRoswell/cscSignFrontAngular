import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Rounting
import { ProfesionalsRoutingModule } from './profesionals-routing.module';

// Componentes
import { CreateProfesionalComponent } from './create-profesional/create-profesional.component';
import { CreateProfesionalFormComponent } from './create-profesional-form/create-profesional-form.component';

// Font Awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// Ngx Modal
import { ModalModule } from 'ngx-bootstrap/modal';
import { CompGrupo1Component } from './create-profesional-form/comp-grupo1/comp-grupo1.component';
import { CompGrupo2Component } from './create-profesional-form/comp-grupo2/comp-grupo2.component';

@NgModule({
  declarations: [CreateProfesionalComponent, CreateProfesionalFormComponent, CompGrupo1Component, CompGrupo2Component],
  imports: [
    CommonModule,
    ProfesionalsRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    ModalModule
  ]
})
export class ProfesionalsModule { }
