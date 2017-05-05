import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {DataTableColumn} from '../../shared/components/data-table/data-table.component';
import { Roster, RosterService } from '../roster.service';

@Component({
  selector: 'app-roster-table',
  templateUrl: './roster-table.component.html',
  styleUrls: ['./roster-table.component.css']
})
export class RosterTableComponent implements OnInit {

    rosters: Roster[] = [];
    columns:  DataTableColumn[] = [
        {property: "id", header: "Id"},
        {property: "course", header: "Course"},
        {property: "studentName", header: "Student"},
        {property: "grade", header: "Grade"},
        {property: "gradYear", header: "Graduation Year"}
    ];

    public saveCallback: Function;

    constructor(private service: RosterService, private route: ActivatedRoute) { }

    ngOnInit() {
        this.saveCallback = this.saveRoster.bind(this);
        if (this.route.snapshot.params['type'] !== undefined) {
            this.getRostersByTypeAndId(
                this.route.snapshot.params['type'],
                +this.route.snapshot.params['id']
            );
        } else {
            this.getRosters();
        }
    }

    getRostersByTypeAndId(type: string, id: number) {

        this.service.getRostersByTypeAndId(type, id)
            .subscribe(rosters => this.rosters = rosters,
            err => { console.log(err); });

    }
    getRosters() {
        this.service.getRosters()
            .subscribe(rosters => this.rosters = rosters,
            err => { console.log(err); });
    }

    saveRoster(roster){
        console.log("save roster");
        this.service.createRoster(roster).subscribe();
    }
}
