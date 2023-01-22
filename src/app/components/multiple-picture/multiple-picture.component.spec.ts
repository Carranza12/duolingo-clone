import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplePictureComponent } from './multiple-picture.component';

describe('MultiplePictureComponent', () => {
  let component: MultiplePictureComponent;
  let fixture: ComponentFixture<MultiplePictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiplePictureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiplePictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
