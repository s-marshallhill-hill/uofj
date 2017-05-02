import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTableEditableRowComponent } from './data-table-editable-row.component';

describe('DataTableEditableRowComponent', () => {
  let component: DataTableEditableRowComponent;
  let fixture: ComponentFixture<DataTableEditableRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataTableEditableRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTableEditableRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
