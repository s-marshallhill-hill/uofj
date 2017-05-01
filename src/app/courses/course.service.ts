import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from "rxjs/Observable";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


export interface Course {
    id: number;
    code: string;
}

@Injectable()
export class CourseService {
    private courseUrl: string = '/api/courses';

    constructor(public http: Http) { }

    getCourses(): Observable<Course[]> {
        return this.http.get(this.courseUrl)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || "Server Error retreiving Courses"));
    }
}
