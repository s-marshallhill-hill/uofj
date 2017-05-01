import { Component, OnInit } from '@angular/core';
import { Grade, GradeService } from '../grade.service';

@Component({
  selector: 'app-grade-grid',
  templateUrl: './grade-grid.component.html',
  styleUrls: ['./grade-grid.component.css']
})
export class GradeGridComponent implements OnInit {

    grades: Grade[];

    constructor(private service: GradeService) { }

    ngOnInit() {
        this.service.getGrades()
            .subscribe(grades => this.grades = grades,
            err => { console.log(err); });
    }
}
