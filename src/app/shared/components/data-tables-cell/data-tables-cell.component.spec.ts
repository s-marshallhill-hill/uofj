import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTablesCellComponent } from './data-tables-cell.component';

describe('DataTablesCellComponent', () => {
  let component: DataTablesCellComponent;
  let fixture: ComponentFixture<DataTablesCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataTablesCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTablesCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
