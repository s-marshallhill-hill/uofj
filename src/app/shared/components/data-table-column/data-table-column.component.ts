import { Component, OnInit, Input } from '@angular/core';
import { DataTableComponent } from '../data-table/data-table.component';

@Component({
  selector: 'data-table-column',
  template: '',
  styleUrls: ['./data-table-column.component.css']
})
export class DataTableColumnComponent {
  @Input() value;
  @Input() header;

  constructor(table: DataTableComponent) {
    //table.addColumn(this)
  }

}
