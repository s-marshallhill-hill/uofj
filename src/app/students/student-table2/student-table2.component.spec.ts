import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentTable2Component } from './student-table2.component';

describe('StudentTable2Component', () => {
  let component: StudentTable2Component;
  let fixture: ComponentFixture<StudentTable2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentTable2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentTable2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
