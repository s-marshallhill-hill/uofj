import { Component, OnInit } from '@angular/core';
import { Student, StudentService } from '../student.service';
import { LocalDataSource } from 'ng2-smart-table';
@Component({
  selector: 'app-student-table2',
  templateUrl: './student-table2.component.html',
  styleUrls: ['./student-table2.component.css']
})
export class StudentTable2Component implements OnInit {
  students: LocalDataSource = new LocalDataSource();

  settings = {
    columns: {
      id: {
        title: 'ID',
        editable: false,
        filter: false
      },
      first: {
        title: 'First Name',
        filter: false,
        required: true
      },
      last: {
        title: 'Last Name',
        filter: false,
        required: true
        
      },
      address: {
        title: 'Address',
        filter: false
      },
      city: {
        title: 'City',
        filter: false
      },
      state: {
        title: 'State',
        filter: false,
        editor: {
          type: 'list',
          config: {
            list: []
          }
        },
        // filter: {
        //   type: 'list',
        //   config: {
        //     list: []
        //   }
        // }
      },
      zip: {
        title: 'Zip',
        filter: false
      },
      email: {
        title: 'Email',
        filter: false
      },
      gradYear: {
        title: 'Graduation',
        filter: false
      }
    },
    delete: {
      confirmDelete: true,
      deleteButtonContent:  '<i class=\"icon material-icons md-36\" title=\"Delete\">delete</i>',
    },
    add: {
      confirmCreate: true,
      addButtonContent:  '<i class=\"icon material-icons md-36\" title=\"Add\">add</i>',
      createButtonContent : '<i class=\"icon material-icons md-36\" title=\"Save\">save</i>',
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
    attr : {
      class: "table table-striped"
    }
  };

  constructor(public service: StudentService) {
    this.settings.columns.state.editor.config.list = service.states;
    // this.settings.columns.state.filter.config.list = service.states;
  }

  ngOnInit() {
    this.service.getStudents()
      .subscribe(students => this.students.load(students),
      err => { console.log(err); });
  }
  createStudent(event) {
    console.log(event);
    
    var student = event.newData;
    if (!student) { event.confirm.reject(); return }
    
    delete student.id;
    
    this.service.createStudent(student).subscribe();

    event.confirm.resolve(event.newData);
  }
  editStudent(event) {
    console.log(event);
    
    var student = event.newData;
    if (!student) { event.confirm.reject(); return }

    this.service.updateStudent(student)
      .subscribe();

      event.confirm.resolve(event.newData);
  }
  deleteStudent(event) {
    console.log(event);
    var student = event.data;
    console.log(student);
    if (!student) { event.confirm.reject(); return }

    this.service.deleteStudent(student)
      .subscribe();

      event.confirm.resolve();
  }
  selectRow(event){
    console.log(event.data);
    event.data.isInEditing = true;
  }

}
