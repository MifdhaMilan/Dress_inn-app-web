import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDressWomenComponent } from './delete-dress-women.component';

describe('DeleteDressWomenComponent', () => {
  let component: DeleteDressWomenComponent;
  let fixture: ComponentFixture<DeleteDressWomenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteDressWomenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteDressWomenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
