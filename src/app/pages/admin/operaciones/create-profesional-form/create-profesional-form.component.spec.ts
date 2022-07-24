import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CreateProfesionalFormComponent } from './create-profesional-form.component';

describe('CreateProfesionalFormComponent', () => {
  let component: CreateProfesionalFormComponent;
  let fixture: ComponentFixture<CreateProfesionalFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateProfesionalFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProfesionalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
