import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { LocalDataSource } from 'ng2-smart-table';
import { Roster, RosterService } from '../roster.service';
import { StudentService } from '../../students/student.service';
import { CourseService } from '../../courses/course.service';
import { GradeService } from '../../grades/grade.service';

import { ListViewRendererComponent } from '../../shared/components/list-view-renderer/list-view-renderer.component'

@Component({
  selector: 'app-roster-table2',
  templateUrl: './roster-table2.component.html',
  styleUrls: ['./roster-table2.component.css']
})
export class RosterTable2Component implements OnInit {
  rosters: LocalDataSource = new LocalDataSource();

  settings;
  tableSettings = {
    columns: {
      id: {
        title: 'ID',
        editable: false,
        filter: false
      },
      studentId: {
        title: 'roster Name',
        filter: false,
        required: true,
        type: 'custom',
        renderComponent: ListViewRendererComponent,
        editor: {
          type: 'list',
          config: {
            list: []
          }
        },

      },
      courseId: {
        title: 'Course',
        filter: false,
        required: true,
        type: 'custom',
        renderComponent: ListViewRendererComponent,
        editor: {
          type: 'list',
          config: {
            list: []
          }
        },

      },

      gradeId: {
        title: 'Grade',
        filter: false,
        type: 'custom',
        renderComponent: ListViewRendererComponent,
        editor: {
          type: 'list',
          config: {
            list: []
          }
        },
      },

      // gradYear: {
      //   title: 'Graduation',
      //   filter: false
      // }
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

  constructor(private service: RosterService, private studentService: StudentService, private courseService: CourseService, private gradeService: GradeService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getrosterList();
    if (this.route.snapshot.params['type'] !== undefined) {
      this.getRostersByTypeAndId(
        this.route.snapshot.params['type'],
        +this.route.snapshot.params['id']
      );
    } else {
      this.getRosters();
    }
  }



  getrosterList() {
    var settings = this.tableSettings;
    this.studentService.getStudentsList().subscribe(students => {
      settings.columns.studentId.editor.config.list = students;
      this.courseService.getCoursesList().subscribe(courses => {
        settings.columns.courseId.editor.config.list = courses;
        this.gradeService.getGradesList().subscribe(grade => {
          // console.log(grade);
          settings.columns.gradeId.editor.config.list = grade;

          this.settings = settings;
        })
      }
      )
    });
  }



  getRostersByTypeAndId(type: string, id: number) {
    this.service.getRostersByTypeAndId(type, id)
      .subscribe(rosters => this.rosters.load(rosters),
      err => { console.log(err); });
  }
  getRosters() {
    this.service.getRosters()
      .subscribe(rosters => this.rosters.load(rosters),
      err => { console.log(err); });
  }

  createRoster(event) {

    var roster = event.newData;
    if (!roster) { event.confirm.reject(); return }

    delete roster.id;

    this.service.createRoster(roster).subscribe(res => {
      roster = res;
      event.confirm.resolve(roster);
      console.log(roster);
    
  });

   
    event.confirm.resolve(roster);
  }
  editRoster(event) {
    console.log(event);

    var roster = event.newData;
    if (!roster) { event.confirm.reject(); return }

    this.service.updateRoster(roster)
      .subscribe();
    event.confirm.resolve(event.newData);
  }
  deleteroster(event) {
    console.log(event);
    var roster = event.data;
    console.log(roster);
    if (!roster) { event.confirm.reject(); return }

    this.service.deleteRoster(roster)
      .subscribe();

    event.confirm.resolve();
  }

  selectRow(event) {
    console.log(event.data);
    event.data.isInEditing = true;
  }
}
