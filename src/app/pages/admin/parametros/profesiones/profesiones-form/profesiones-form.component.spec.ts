import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesionesFormComponent } from './profesiones-form.component';

describe('ProfesionesFormComponent', () => {
  let component: ProfesionesFormComponent;
  let fixture: ComponentFixture<ProfesionesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfesionesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfesionesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
