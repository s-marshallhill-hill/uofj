import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { Course, CourseService } from '../course.service';

@Component({
  selector: 'app-course-table',
  templateUrl: './course-table.component.html',
  styleUrls: ['./course-table.component.css']
})
export class CourseTableComponent implements OnInit {
  courses: LocalDataSource = new LocalDataSource();
  settings = {
    columns: {
      id: {
        title: 'ID',
        editable: false,
        filter: false
      },
      code: {
        title: 'Course',
        filter: false,
        required: true,


      },

    },


    delete: {
      confirmDelete: true,
      deleteButtonContent: '<i class=\"icon material-icons md-36\" title=\"Delete\">delete</i>',
    },
    add: {
      confirmCreate: true,
      addButtonContent: '<i class=\"icon material-icons md-36\" title=\"Add\">add</i>',
      createButtonContent: '<i class=\"icon material-icons md-36\" title=\"Save\">save</i>',
      cancelButtonContent: '<i class=\"icon material-icons md-36\" title=\"Cancel\">clear</i>',
    },
    edit: {
      confirmSave: true,
      inputClass: "form-control form-control-sm",
      cancelButtonContent: '<i class=\"icon material-icons md-36\" title=\"Cancel\">clear</i>',
      saveButtonContent: '<i class=\"icon material-icons md-36\" title=\"Save\">save</i>',
      editButtonContent: '<i class=\"icon material-icons md-36\" title=\"Edit\">mode_edit</i>'
    },
    mode: 'inline',
    actions: {
      position: "right"
    },
    attr: {
      class: "table table-striped"
    }
  };

  constructor(private service: CourseService) { }

  ngOnInit() {
    this.service.getCourses()
      .subscribe(courses => this.courses.load(courses),
      err => { console.log(err); });
  }

  createCourse(event) {

    var course = event.newData;
    console.log(course);
    if (!course) { event.confirm.reject(); return }

    delete course.id;

    this.service.createCourse(course).subscribe(
      //     res => {
      //     roster = res;
      //     event.confirm.resolve(roster);
      //     console.log(roster);

      // }


    );
    event.confirm.resolve(course);

  }
  updateCourse(event) {
    console.log(event);

    var course = event.newData;
    if (!course) { event.confirm.reject(); return }

    this.service.updateCourse(course)
      .subscribe();
    event.confirm.resolve(event.newData);
  }
  deleteCourse(event) {
    console.log(event);
    var course = event.data;
    console.log(course);
    if (!course) { event.confirm.reject(); return }

    this.service.deleteCourse(course)
      .subscribe();

    event.confirm.resolve();
  }

  selectRow(event) {
    console.log(event.data);
    // event.data.isInEditing = true;
  }

}
