import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Student } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit, OnChanges {
    @Input() student: Student;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log("ngOnChange student component");
      console.log(changes);
  }
  update(student) {
      console.log("updating student");
      console.log(student);
  }
}
