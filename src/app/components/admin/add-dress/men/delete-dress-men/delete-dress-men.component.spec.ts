import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDressMenComponent } from './delete-dress-men.component';

describe('DeleteDressMenComponent', () => {
  let component: DeleteDressMenComponent;
  let fixture: ComponentFixture<DeleteDressMenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteDressMenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteDressMenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
