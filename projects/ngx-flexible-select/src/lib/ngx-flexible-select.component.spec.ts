import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxFlexibleSelectComponent } from './ngx-flexible-select.component';

describe('NgxFlexibleSelectComponent', () => {
  let component: NgxFlexibleSelectComponent;
  let fixture: ComponentFixture<NgxFlexibleSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxFlexibleSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxFlexibleSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
