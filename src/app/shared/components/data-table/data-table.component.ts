import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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


  @Input() public saveCallback: Function;
  @Input() dataset;
  @Input() columns: DataTableColumnComponent[] = [];

  @Output() saveRow: EventEmitter<any> = new EventEmitter<any>();
  @Output() deleteRow: EventEmitter<any> = new EventEmitter<any>();


  // addColumn(column) {
  //   this.columns.push(column);
  // }

  // saveRow(row) {
  //   console.log("saving row");
  //   this.saveCallback(row);
  // }
}
