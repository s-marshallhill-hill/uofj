import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from "rxjs/Observable";
import { DataService } from '../shared/services/data.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

export interface Roster {
    id: number;
    course: string;
    studentName: string;
    gradeYear: number;
    grade: string;
}

@Injectable()
export class RosterService {

    private rosterUrl: string = '/api/rosters';

    constructor(private service: DataService) { }

    getRosters(): Observable<Roster[]> {
        return this.service.get(this.rosterUrl)
            .map((res: Response) => res.json())
    }

    getRostersByTypeAndId(type: string, id: number): Observable<Roster[]> {
        let url = `${this.rosterUrl}/filterby${type}/${id}`;
        return this.service.get(url)
            .map((res: Response) => res.json())
    }

    saveRoster(roster: Roster): Observable<Response> {
        let url = `${this.rosterUrl}/${roster.id}`;
        return this.service.put(url, roster);
    }

}
