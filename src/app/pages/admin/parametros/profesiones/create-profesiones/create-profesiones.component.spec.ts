import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProfesionesComponent } from './create-profesiones.component';

describe('CreateProfesionesComponent', () => {
  let component: CreateProfesionesComponent;
  let fixture: ComponentFixture<CreateProfesionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateProfesionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProfesionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
