import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'data-tables-cell-view',
  templateUrl: './data-tables-cell-view.component.html',
  styleUrls: ['./data-tables-cell-view.component.css']
})
export class DataTablesCellViewComponent implements OnInit {

  @Input() value: string = ''; // Private variable for input value

  constructor() { }

  ngOnInit() {
  }

}
