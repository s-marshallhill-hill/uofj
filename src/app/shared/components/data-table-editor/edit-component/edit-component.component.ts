import { Component, OnInit, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-component',
  templateUrl: './edit-component.component.html',
  styleUrls: ['./edit-component.component.css']
})
export class EditComponentComponent implements OnInit {
  @Input() label: string = '';  // Label value for input element
  @Input() type: string = 'text'; // The type of input element
  @Input() required: boolean = false; // Is input requried?
  @Input() disabled: boolean = false; // Is input disabled?
  @Input() value;
  @Input() editing;

  @Input() editBegin: EventEmitter<any> = new EventEmitter();
  @Input() editDone: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
