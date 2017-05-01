import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { DataService } from '../shared/services/data.service';
import { Response } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


export class Student {
    id: number;

    first: string;

    last: string;

    age: number;

    address: string;

    city: string;

    state: string;

    zip: number;

    email: string;

    gradYear: number;

}

@Injectable()
export class StudentService {

    private studentsUrl: string = '/api/students';

    constructor(private service: DataService) { }

    getStudents(): Observable<Student[]> {
        return this.service.get(this.studentsUrl)
            .map((res: Response) => res.json());
    }

    updateStudent(student: Student): Observable<Response> {
    //updateStudent(student: Student): Observable<Student> {
        let url = `${this.studentsUrl}/update/${student.id}`;
        return this.service.put(url, student);
    }

    createStudent(student: Student): Observable<Response> {
       let url = `${this.studentsUrl}/create`;

        return this.service.post(url, student);
    }
}
