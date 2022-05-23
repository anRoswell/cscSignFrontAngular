import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfesionalsRoutingModule } from './profesionals-routing.module';
import { CreateProfesionalComponent } from './create-profesional/create-profesional.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CreateProfesionalFormComponent } from './create-profesional-form/create-profesional-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CreateProfesionalComponent, CreateProfesionalFormComponent],
  imports: [
    CommonModule,
    ProfesionalsRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ]
})
export class ProfesionalsModule { }
