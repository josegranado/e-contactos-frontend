import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddContactosComponent } from './add-contactos.component';

describe('AddContactosComponent', () => {
  let component: AddContactosComponent;
  let fixture: ComponentFixture<AddContactosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddContactosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddContactosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
