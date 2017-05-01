import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentTemplateFormComponent } from './student-template-form.component';

describe('StudentTemplateFormComponent', () => {
  let component: StudentTemplateFormComponent;
  let fixture: ComponentFixture<StudentTemplateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentTemplateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentTemplateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
