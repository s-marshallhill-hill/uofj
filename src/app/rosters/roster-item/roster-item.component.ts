import { Component, OnInit, Input } from '@angular/core';
import { Roster, RosterService } from '../roster.service';
import { RosterTableComponent } from '../roster-table/roster-table.component';

@Component({
    selector: '[my-tr-roster]',
    templateUrl: './roster-item.component.html',
    styleUrls: ['./roster-item.component.css']
})
export class RosterItemComponent implements OnInit {
    @Input() roster: Roster;
    editing_row: boolean = false;

    constructor(private service: RosterService, private roster_table: RosterTableComponent) { 
    }

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
