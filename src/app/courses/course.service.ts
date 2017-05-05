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

export class CourseListItem {
    value: number;
    title: string;

    constructor(course: Course) {
        this.value = course.id;
        this.title = course.code;
    }
}

@Injectable()
export class CourseService {
    private courseUrl: string = '/api/courses';

    constructor(private service: DataService) { }

    getCourses(): Observable<Course[]> {
        return this.service.get(this.courseUrl)
            .map((res: Response) => res.json());
    }


    private extractCourseListItems(res: Response) {
        let body = res.json();
        var courseItems: CourseListItem[] = [];
        body.forEach(function (student) {
            let s = new CourseListItem(student);
            courseItems.push(s);
        });
        return courseItems;
    }

    getCoursesList(): Observable<CourseListItem[]> {
        return this.service.get(this.courseUrl)
            .map((res: Response) => this.extractCourseListItems(res))
    }
    updateCourse(course: Course): Observable<Response> {
        //updateStudent(student: Student): Observable<Student> {
        let url = `${this.courseUrl}/update/${course.id}`;
        return this.service.put(url, course);
    }

    createCourse(course: Course): Observable<Response> {
        let url = `${this.courseUrl}/Create`;

        return this.service.post(url, course);
    }
    deleteCourse(course: Course): Observable<Response> {
        let url = `${this.courseUrl}/${course.id}`;

        return this.service.delete(url);
    }
}
