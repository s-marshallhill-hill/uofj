import { Component, OnInit, Input } from '@angular/core';

@Component({
  // selector: 'my-tr',
 selector: 'my-table-row , [my-table-row]',
  templateUrl: './data-table-editable-row.component.html',
  styleUrls: ['./data-table-editable-row.component.css']
})
export class DataTableEditableRowComponent implements OnInit {
  @Input() row: any;
  @Input() columns;
 
  editing_row: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  editBegin() {
    console.log("editing begin");

    this.editing_row = true;
  }
  editDone() {
    console.log("editing done");
    this.editing_row = false;
  }
}
