import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrectMessageComponent } from './correct-message.component';

describe('CorrectMessageComponent', () => {
  let component: CorrectMessageComponent;
  let fixture: ComponentFixture<CorrectMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorrectMessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorrectMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
