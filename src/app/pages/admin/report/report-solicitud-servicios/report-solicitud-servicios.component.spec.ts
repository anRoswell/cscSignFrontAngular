import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportSolicitudServiciosComponent } from './report-solicitud-servicios.component';

describe('ReportSolicitudServiciosComponent', () => {
  let component: ReportSolicitudServiciosComponent;
  let fixture: ComponentFixture<ReportSolicitudServiciosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportSolicitudServiciosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportSolicitudServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
