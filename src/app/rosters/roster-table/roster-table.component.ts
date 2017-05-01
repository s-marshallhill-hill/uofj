import { Component, OnInit } from '@angular/core';
import { Roster, RosterService } from '../roster.service';

@Component({
  selector: 'app-roster-table',
  templateUrl: './roster-table.component.html',
  styleUrls: ['./roster-table.component.css']
})
export class RosterTableComponent implements OnInit {

    rosters: Roster[];

    constructor(private service: RosterService) { }

    ngOnInit() {
        this.service.getRosters()
            .subscribe(rosters => this.rosters = rosters,
            err => { console.log(err); });
    }

}
