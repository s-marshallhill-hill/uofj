import { Component } from '@angular/core';

import { DefaultEditor } from './default-editor';

@Component({
  selector: 'select-editor',
  template: `
    <md-select 
            [(ngModel)]="cell.newValue"
            [name]="cell.getId()"
            [disabled]="!cell.isEditable()"
            (click)="onClick.emit($event)"
            (keydown.enter)="onEdited.emit($event)"
            (keydown.esc)="onStopEditing.emit()"
            [placeholder]="cell.getTitle()"
            style="margin-top:15px">

        <md-option *ngFor="let option of cell.getColumn().getConfig()?.list" [value]="option.value"
                >{{ option.title }}
        </md-option>
    </md-select>
    `,
})
export class SelectEditorComponent extends DefaultEditor {

  constructor() {
    super();
  }
}
