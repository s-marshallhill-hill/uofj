import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from "rxjs/Observable";
import { DataService } from '../shared/services/data.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


export interface Course {
    id: number;
    code: string;
}

@Injectable()
export class CourseService {
    private courseUrl: string = '/api/courses';

    constructor(private service: DataService) { }

    getCourses(): Observable<Course[]> {
        return this.service.get(this.courseUrl)
            .map((res: Response) => res.json());
    }

    updateStudent(course: Course): Observable<Response> {
    //updateStudent(student: Student): Observable<Student> {
        let url = `${this.courseUrl}/update/${course.id}`;
        return this.service.put(url, course);
    }

    createStudent(course: Course): Observable<Response> {
       let url = `${this.courseUrl}/create`;

        return this.service.post(url, course);
    }
}
