import { Component, OnInit, Input } from '@angular/core';
import { DataTableColumnComponent } from '../data-table-column/data-table-column.component';

export interface DataTableColumn {
  property: string;
  header: string;
}

@Component({
  selector: 'data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent {

  @Input() dataset;
  @Input() columns: DataTableColumnComponent[] = [];

  // addColumn(column) {
  //   this.columns.push(column);
  // }
}
