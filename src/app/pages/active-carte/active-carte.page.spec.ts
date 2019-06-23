import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveCartePage } from './active-carte.page';

describe('ActiveCartePage', () => {
  let component: ActiveCartePage;
  let fixture: ComponentFixture<ActiveCartePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveCartePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveCartePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
