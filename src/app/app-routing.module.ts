import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StudentsGridComponent } from './students/students-grid/students-grid.component';
import { StudentTableComponent } from './students/student-table/student-table.component';
import { StudentFormComponent } from './students/student-form/student-form.component';
import { StudentTemplateFormComponent } from './students/student-template-form/student-template-form.component';


import { TestComponent } from './test/test/test.component';
const routes: Routes = [
    {
        path: '',
        component: TestComponent,
        children: []
    },
    {
        path: 'Students',
        component: StudentTableComponent,
        children: []
    },
    {
        path: 'Students/create',
        component: StudentTemplateFormComponent,
//        component: StudentFormComponent,
        children: []
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes), NgbModule.forRoot()],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }
