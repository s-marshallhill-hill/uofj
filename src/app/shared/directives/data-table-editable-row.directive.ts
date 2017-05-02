import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[data-table-editable-row]'
})
export class DataTableEditableRowDirective {
  @Input() row: any[];
  @Input() editing_row: boolean = false;
 
  constructor() { }

    
    ngOnInit() {
    }

    // beginEditing(){

    // }
    editBegin() {
        console.log("editing begin");
        
        this.editing_row = true;
    }
    editDone(){
        console.log("editing done");
        this.editing_row=false;
    }
}

