import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from "rxjs/Observable";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

export interface Grade {
    id: number;
    grade: string;
}
@Injectable()
export class GradeService {

    private gradeUrl: string = '/api/grades';

    constructor(public http: Http) { }

    getGrades(): Observable<Grade[]> {
        return this.http.get(this.gradeUrl)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || "Server Error retreiving Grades"));
    }

}
