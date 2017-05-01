import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";
import "rxjs/add/operator/map";

import { Student, StudentService } from '../student.service';

@Component({
    selector: 'app-students-grid',
    templateUrl: './students-grid.component.html',
    styleUrls: ['./students-grid.component.css']
})
export class StudentsGridComponent implements OnInit {

    students: Student[];

    constructor(public service: StudentService) { }

    ngOnInit() {
        this.service.getStudents()
            .subscribe(students => this.students = students,
            err => { console.log(err); });
    }

}
