import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

// Slider
import { NgImageSliderModule } from 'ng-image-slider';
import { ReportSolicitudServiciosComponent } from './report-solicitud-servicios/report-solicitud-servicios.component';

@NgModule({
  declarations: [ReportSolicitudServiciosComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    NgImageSliderModule,
  ],
})
export class ReportModule {}
