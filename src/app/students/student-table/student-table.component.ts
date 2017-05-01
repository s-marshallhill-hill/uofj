import { Component, OnInit, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";
import "rxjs/add/operator/map";

import { Student, StudentService } from '../student.service';
@Component({
    selector: 'app-student-table',
    templateUrl: './student-table.component.html',
    styleUrls: ['./student-table.component.css']
})
export class StudentTableComponent implements OnInit {
    students: Student[];

    constructor(public service: StudentService,  private router: Router) { }

    ngOnInit() {
        this.service.getStudents()
            .subscribe(students => this.students = students,
            err => { console.log(err); });
    }

    //ngOnChanges(changes: SimpleChanges): void {
    //    console.log("ngOnChange");
    //    console.log(changes);
    //}

    update(student) {
        if (!student) { return; }

        this.service.updateStudent(student)
            .subscribe();
    }

    createNewStudent(){
        this.router.navigate(['Students/create'])
    }
   
}
