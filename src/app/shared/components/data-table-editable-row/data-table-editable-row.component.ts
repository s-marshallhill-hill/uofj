import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  // selector: 'my-tr',
  selector: 'my-table-row , [my-table-row]',
  templateUrl: './data-table-editable-row.component.html',
  styleUrls: ['./data-table-editable-row.component.css']
})
export class DataTableEditableRowComponent implements OnInit {
  @Input() row: any;
  @Input() columns;
  @Input() saveRow: EventEmitter<any>;
  @Input() deleteRow: EventEmitter<any>;

  editing_row: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  editBegin() {
    console.log("editing begin 1");

    if (!this.editing_row) {
      console.log("editing begin");
      this.editing_row = true;
    }
  }
  editDone() {
    if (this.editing_row) {
      console.log("editing done");
      this.editing_row = false;
      this.saveRow.emit(this.row);
    }
  }
  deleteRowHandler() {
    this.deleteRow.emit(this.row)
  }
}
