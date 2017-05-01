import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from "rxjs/Observable";

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

    constructor(public http: Http) { }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }

    private handleError(error: Response | any) {
        // In a real world app, you might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.log(errMsg);
        return Observable.throw(errMsg);
    }

    getStudents(): Observable<Student[]> {
        return this.http.get(this.studentsUrl)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || "Server Error retreiving Students"));
    }

    updateStudent(student: Student): Observable<Student> {
        let headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        let url = `${this.studentsUrl}/${student.id}`;
        return this.http.put(url, JSON.stringify(student), options)
            .catch(this.handleError);
         //   .catch((error: any) => Observable.throw(error.json().error || "Server Error saving Students"));
    }

    createStudent(student: Student): Observable<Student> {
        let headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.studentsUrl, JSON.stringify(student), options)
            .catch(this.handleError);
        //   .catch((error: any) => Observable.throw(error.json().error || "Server Error saving Students"));
    }
}
