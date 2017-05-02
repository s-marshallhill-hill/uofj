import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StudentsGridComponent } from './students/students-grid/students-grid.component';
import { StudentTableComponent } from './students/student-table/student-table.component';
import { StudentFormComponent } from './students/student-form/student-form.component';
import { StudentTemplateFormComponent } from './students/student-template-form/student-template-form.component';
import { RosterTableComponent } from './rosters/roster-table/roster-table.component';
import { StudentTable2Component } from './students/student-table2/student-table2.component';
import { MdComponent } from './test/md/md/md.component';


import { TestComponent } from './test/test/test.component';
const routes: Routes = [
    {
        path: 'rosters',
        component: RosterTableComponent,
        children: []
    },
    {
        path: 'mdtest',
        component: MdComponent,
        children: []
    },
    {
        path: 'students',
        component: StudentTableComponent,
        children: []
    },
     {
        path: 'students2',
        component: StudentTable2Component,
        children: []
    },
    {
        path: 'students/create',
        component: StudentTemplateFormComponent,
        //        component: StudentFormComponent,
        children: []
    },
    { path: 'rosters/:type/:id', component: RosterTableComponent },
    { path: '', redirectTo: 'rosters', pathMatch: 'full' },

];

@NgModule({
    imports: [RouterModule.forRoot(routes), NgbModule.forRoot()],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }
