import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SedeFormComponent } from './sede-form.component';

describe('SedeFormComponent', () => {
  let component: SedeFormComponent;
  let fixture: ComponentFixture<SedeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SedeFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SedeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
