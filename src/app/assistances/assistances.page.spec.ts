import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistancesPage } from './assistances.page';

describe('AssistancesPage', () => {
  let component: AssistancesPage;
  let fixture: ComponentFixture<AssistancesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssistancesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssistancesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
