import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTablesCellViewComponent } from './data-tables-cell-view.component';

describe('DataTablesCellViewComponent', () => {
  let component: DataTablesCellViewComponent;
  let fixture: ComponentFixture<DataTablesCellViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataTablesCellViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTablesCellViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
