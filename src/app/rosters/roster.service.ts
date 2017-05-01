import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from "rxjs/Observable";

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

    constructor(public http: Http) { }

    getRosters(): Observable<Roster[]> {
        return this.http.get(this.rosterUrl)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || "Server Error retreiving Grades"));
    }

}
