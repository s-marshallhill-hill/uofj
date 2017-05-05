import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RosterTable2Component } from './roster-table2.component';

describe('RosterTable2Component', () => {
  let component: RosterTable2Component;
  let fixture: ComponentFixture<RosterTable2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RosterTable2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RosterTable2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
