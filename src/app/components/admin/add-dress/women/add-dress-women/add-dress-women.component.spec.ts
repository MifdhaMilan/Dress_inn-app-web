import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDressWomenComponent } from './add-dress-women.component';

describe('AddDressWomenComponent', () => {
  let component: AddDressWomenComponent;
  let fixture: ComponentFixture<AddDressWomenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDressWomenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDressWomenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
