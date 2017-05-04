import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

//Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
//import { StudentComponent } from './students/student/student.component';
import { StudentsGridComponent } from './students/students-grid/students-grid.component';
import { StudentTableComponent } from './students/student-table/student-table.component';

import { CourseGridComponent } from './courses/course-grid/course-grid.component';
import { GradeGridComponent } from './grades/grade-grid/grade-grid.component';
import { RosterTableComponent } from './rosters/roster-table/roster-table.component';
import { RosterItemComponent } from './rosters/roster-item/roster-item.component';

import { TestComponent } from './test/test/test.component';
import { InlineEditComponent } from './shared/components/inline-edit/inline-edit.component';
import { StudentTemplateFormComponent } from './students/student-template-form/student-template-form.component';

import { DataTableComponent } from './shared/components/data-table/data-table.component';
import { DataTableColumnComponent } from './shared/components/data-table-column/data-table-column.component';
import { DataTableEditableRowComponent } from './shared/components/data-table-editable-row/data-table-editable-row.component';

import { Ng2SmartTableModule } from 'ng2-smart-table';

//Services
import { StudentService } from "./students/student.service";
import { CourseService } from "./courses/course.service";
import { GradeService } from "./grades/grade.service";
import { RosterService } from "./rosters/roster.service";
import { StudentFormComponent } from './students/student-form/student-form.component';
import { DataService } from './shared/services/data.service';
import { SortByPipe } from './shared/pipes/sort-by.pipe';
import { StudentTable2Component } from './students/student-table2/student-table2.component';
import { MdComponent } from './test/md/md/md.component';
//import { DataTableEditableRowDirective } from './shared/directives/data-table-editable-row.directive';

import 'hammerjs';
import { ActionConfirmationComponent } from './shared/components/action-confirmation/action-confirmation.component';
import { InlineSelectComponent } from './shared/components/inline-select/inline-select.component';
import { DataTablesCellViewComponent } from './shared/components/data-tables-cell-view/data-tables-cell-view.component';
import { DataTablesCellComponent } from './shared/components/data-tables-cell/data-tables-cell.component';
import { InputEditorComponent } from './shared/components/data-table-editor/input-editor/input-editor.component';
import { EditComponentComponent } from './shared/components/data-table-editor/edit-component/edit-component.component';


@NgModule({
    declarations: [
        InlineEditComponent,
        AppComponent,
        HeaderComponent,
        FooterComponent,
        RosterItemComponent,
        //StudentComponent,
        StudentFormComponent,
        StudentTableComponent,
        StudentsGridComponent,
        CourseGridComponent,
        GradeGridComponent,
        RosterTableComponent,
        TestComponent,
        StudentFormComponent,
        StudentTemplateFormComponent,
        SortByPipe,
        DataTableEditableRowComponent,
        DataTableComponent,
        DataTableColumnComponent,
        StudentTable2Component,
        MdComponent,
        ActionConfirmationComponent,
        InlineSelectComponent,
        DataTablesCellViewComponent,
        DataTablesCellComponent,
        InputEditorComponent,
        EditComponentComponent,
    ],
    imports: [
        NgbModule.forRoot(),
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        AppRoutingModule,
        Ng2SmartTableModule,
        MaterialModule.forRoot(),
        BrowserAnimationsModule
    ],
    providers: [
        DataService,
        StudentService,
        CourseService,
        GradeService,
        RosterService
    ],
    entryComponents: [ActionConfirmationComponent],

    bootstrap: [AppComponent]
})
export class AppModule { }
