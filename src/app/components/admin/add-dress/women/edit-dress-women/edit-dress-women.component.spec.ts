import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDressWomenComponent } from './edit-dress-women.component';

describe('EditDressWomenComponent', () => {
  let component: EditDressWomenComponent;
  let fixture: ComponentFixture<EditDressWomenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDressWomenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDressWomenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
