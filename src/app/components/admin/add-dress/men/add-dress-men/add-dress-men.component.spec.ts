import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDressMenComponent } from './add-dress-men.component';

describe('AddDressMenComponent', () => {
  let component: AddDressMenComponent;
  let fixture: ComponentFixture<AddDressMenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDressMenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDressMenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
