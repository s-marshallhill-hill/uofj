import { Component, OnInit, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { DataTableColumn } from '../../shared/components/data-table/data-table.component';

import { Student, StudentService } from '../student.service';
@Component({
    selector: 'app-student-table',
    templateUrl: './student-table.component.html',
    styleUrls: ['./student-table.component.css']
})
export class StudentTableComponent implements OnInit {
    students: Student[];
    columns: DataTableColumn[] = [
        { property: "id", header: "Id" },
        { property: "first", header: "First Name" },
        { property: "last", header: "Last Name" },
        { property: "address", header: "Address" },
        { property: "city", header: "City" },
        { property: "state", header: "State" },
        { property: "zip", header: "Zip" },
        { property: "age", header: "Age" },
        { property: "email", header: "Email" },
        { property: "gradYear", header: "Graduation Year" },
    ];

    public saveCallback: Function;

    constructor(public service: StudentService, private router: Router) { }

    ngOnInit() {
        this.saveCallback = this.update.bind(this);
        this.service.getStudents()
            .subscribe(students => this.students = students,
            err => { console.log(err); });
    }

    //ngOnChanges(changes: SimpleChanges): void {
    //    console.log("ngOnChange");
    //    console.log(changes);
    //}

    update(student) {
        console.log("updating student");
        if (!student) { return; }

        this.service.updateStudent(student)
            .subscribe();
    }

    createNewStudent() {
        this.router.navigate(['students/create'])
    }

    delete(student) {
        console.log("delete student");
        if (student) {
            this.service.deleteStudent(student).subscribe();
            this.students = this.students.filter(studentData => studentData != student);
        }
    }

}
