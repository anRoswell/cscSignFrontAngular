import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompGrupo2Component } from './comp-grupo2.component';

describe('CompGrupo2Component', () => {
  let component: CompGrupo2Component;
  let fixture: ComponentFixture<CompGrupo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompGrupo2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompGrupo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
