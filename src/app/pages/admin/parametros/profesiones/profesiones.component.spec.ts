import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesionesComponent } from './profesiones.component';

describe('ProfesionesComponent', () => {
  let component: ProfesionesComponent;
  let fixture: ComponentFixture<ProfesionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfesionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfesionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
