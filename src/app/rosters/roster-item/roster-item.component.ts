import { Component, OnInit, Input } from '@angular/core';
import { Roster, RosterService } from '../roster.service';

@Component({
    selector: 'app-roster-item',
    templateUrl: './roster-item.component.html',
    styleUrls: ['./roster-item.component.css']
})
export class RosterItemComponent implements OnInit {
    @Input() roster: Roster;

    constructor(private service: RosterService) { }

    ngOnInit() {
    }

}
