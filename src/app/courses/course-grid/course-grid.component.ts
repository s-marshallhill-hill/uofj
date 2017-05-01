import { Component, OnInit } from '@angular/core';
import { Course, CourseService } from '../course.service';

@Component({
  selector: 'app-course-grid',
  templateUrl: './course-grid.component.html',
  styleUrls: ['./course-grid.component.css']
})
export class CourseGridComponent implements OnInit {

    courses: Course[];

  constructor(private service: CourseService) { }

  ngOnInit() {
      this.service.getCourses()
          .subscribe(courses => this.courses = courses,
          err => { console.log(err); });
  }

}
