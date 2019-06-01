import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesRechargePage } from './services-recharge.page';

describe('ServicesRechargePage', () => {
  let component: ServicesRechargePage;
  let fixture: ComponentFixture<ServicesRechargePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesRechargePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesRechargePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
