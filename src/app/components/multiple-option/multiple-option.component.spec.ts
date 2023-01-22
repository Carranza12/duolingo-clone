import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleOptionComponent } from './multiple-option.component';

describe('MultipleOptionComponent', () => {
  let component: MultipleOptionComponent;
  let fixture: ComponentFixture<MultipleOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipleOptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultipleOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
