import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompGrupo1Component } from './comp-grupo1.component';

describe('CompGrupo1Component', () => {
  let component: CompGrupo1Component;
  let fixture: ComponentFixture<CompGrupo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompGrupo1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompGrupo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
