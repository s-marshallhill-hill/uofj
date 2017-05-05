import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { DataTableColumnComponent } from '../../data-table-column/data-table-column.component';

@Component({
  selector: 'app-edit-component',
  templateUrl: './edit-component.component.html',
  styleUrls: ['./edit-component.component.css']
})
export class EditComponentComponent implements OnInit {
  private _value;
  @Input() column: DataTableColumnComponent;


  @Input()
  get value () {
    return this._value
  }
  set value(newValue) {
    console.log("edit component setting value " + newValue);
    this._value = newValue;
    this.valueChanged.emit(this.value);
  }
  @Input() editing;

  @Output() valueChanged: EventEmitter<any> = new EventEmitter();

  @Input() editBegin: EventEmitter<any> = new EventEmitter();
  @Input() editDone: EventEmitter<any> = new EventEmitter();

  constructor() { }

  update(newValue) {
    this.value=newValue;
  }

  ngOnInit() {
    
  }
}


