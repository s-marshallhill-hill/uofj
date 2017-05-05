import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataTableColumnComponent } from '../data-table-column/data-table-column.component';

@Component({
  selector: 'data-tables-cell',
  templateUrl: './data-tables-cell.component.html',
  styleUrls: ['./data-tables-cell.component.css']
})
export class DataTablesCellComponent implements OnInit {

  private _value;
  @Input() editing: boolean = false; // Is Component in edit mode?
  @Input() column: DataTableColumnComponent;
  @Input()
  get value () {
    return this._value
  }
  set value(newValue) {
    this._value = newValue;
    this.valueChanged.emit(this._value);
  }

  @Output() valueChanged: EventEmitter<any> = new EventEmitter();
  @Output() editBegin: EventEmitter<any> = new EventEmitter();
  @Output() editDone: EventEmitter<any> = new EventEmitter();

  ngOnInit() {

  }

  // Start the editting process for the input element
  edit(value) {
    // if (this.disabled) {
    //     return;
    // }

    // this.preValue = value;
    // this.editing = true;
    // // Focus on the input element just as the editing begins
    // setTimeout(_ => this._renderer.invokeElementMethod(this.inlineEditControl.nativeElement, 'focus', []));

    //this.editBegin.emit();
    console.log("editing value");
    this.editing = true;
    this.editBegin.emit();
    //setTimeout(_ => this._renderer.invokeElementMethod(this.InputControl.nativeElement, 'focus', []));

  }

  update(newValue) {
    this.value = newValue;
  }
}
