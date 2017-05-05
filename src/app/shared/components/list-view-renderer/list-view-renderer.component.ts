import { Component, Input, OnInit, Host } from '@angular/core';

import { ViewCell } from '../../../../ng2-smart-table';
import {CustomViewComponent} from '../../../../ng2-smart-table/components/cell/cell-view-mode/custom-view.component'

@Component({
  template: `
    {{renderValue}}
  `,
})
export class ListViewRendererComponent implements ViewCell, OnInit {

  renderValue: string;

  @Input() value: string | number;
  @Input() rowData: any;
  constructor(@Host() private parent: CustomViewComponent) {
      // console.log(parent);
  }
  ngOnInit() {
    //this.renderValue = this.value.toString(); //this.parent.cell.getColumn().editor.config.list[this.value].title; //this.value.toString().toUpperCase();
    // console.log('list view: ' + this.value);
    // console.log(this.parent.cell.getColumn().editor.config.list);
    this.renderValue =  this.parent.cell.getColumn().editor.config.list.find(x => x.value == this.value).title; //this.value.toString().toUpperCase();
    
  }

}