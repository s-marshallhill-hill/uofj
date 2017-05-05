import { Component, OnInit, Input, Output, EventEmitter, ViewChildren, QueryList, OnChanges, SimpleChange } from '@angular/core';
import { InlineEditComponent } from '../inline-edit/inline-edit.component'

@Component({
  // selector: 'my-tr',
  selector: 'my-table-row , [my-table-row]',
  templateUrl: './data-table-editable-row.component.html',
  styleUrls: ['./data-table-editable-row.component.css']
})
export class DataTableEditableRowComponent implements OnInit {
  @ViewChildren(InlineEditComponent) editors: QueryList<InlineEditComponent>;

  @Input() row: any;
  @Input() columns;
  @Input() saveRow: EventEmitter<any>;
  @Input() deleteRow: EventEmitter<any>;

  editing_row: boolean = false;

  constructor() { }

  ngOnInit() {
    console.log(this.editors);
  }

  editBegin() {

    if (!this.editing_row) {
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

  editCancel() {
    this.editing_row = false;
    this.editors.forEach(editor => editor.cancelEdit());
  }
}
