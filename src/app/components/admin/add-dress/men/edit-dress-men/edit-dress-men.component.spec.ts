import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDressMenComponent } from './edit-dress-men.component';

describe('EditDressMenComponent', () => {
  let component: EditDressMenComponent;
  let fixture: ComponentFixture<EditDressMenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDressMenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDressMenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
