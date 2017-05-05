import { Component, OnInit } from '@angular/core';
import { Student, StudentService } from '../../students/student.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  students;
  constructor(private service: StudentService) { }

  ngOnInit() {
    this.service.getStudentsList()
      .subscribe(students => this.students = students,
      err => { console.log(err); });
  }

}
