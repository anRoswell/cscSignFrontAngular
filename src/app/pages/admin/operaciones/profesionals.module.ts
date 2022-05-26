import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Rounting
import { ProfesionalsRoutingModule } from './profesionals-routing.module';

// Componentes
import { CreateProfesionalComponent } from './create-profesional/create-profesional.component';
import { CreateProfesionalFormComponent } from './create-profesional/create-profesional-form/create-profesional-form.component';

// Font Awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// Ngx Modal
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [CreateProfesionalComponent, CreateProfesionalFormComponent],
  imports: [
    CommonModule,
    ProfesionalsRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    ModalModule
  ]
})
export class ProfesionalsModule { }
