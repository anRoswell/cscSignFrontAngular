import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProfesionalComponent } from './create-profesional.component';

describe('CreateProfesionalComponent', () => {
  let component: CreateProfesionalComponent;
  let fixture: ComponentFixture<CreateProfesionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateProfesionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProfesionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
