import { Component, OnInit, ElementRef, Renderer } from '@angular/core';
import { DefaultEditor } from '../data-table-editor'

@Component({
  selector: 'app-input-editor',
  templateUrl: './input-editor.component.html',
  styleUrls: ['./input-editor.component.css']
})
export class InputEditorComponent extends DefaultEditor implements OnInit {

  constructor(element: ElementRef,  _renderer: Renderer) {
    super(element, _renderer);
  }
}
