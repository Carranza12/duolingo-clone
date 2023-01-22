import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncorrectMesageComponent } from './incorrect-mesage.component';

describe('IncorrectMesageComponent', () => {
  let component: IncorrectMesageComponent;
  let fixture: ComponentFixture<IncorrectMesageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncorrectMesageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncorrectMesageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
