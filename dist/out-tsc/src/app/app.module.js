"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_routing_module_1 = require("./app-routing.module");
//Components
var app_component_1 = require("./app.component");
var header_component_1 = require("./header/header.component");
var footer_component_1 = require("./footer/footer.component");
//import { StudentComponent } from './students/student/student.component';
var students_grid_component_1 = require("./students/students-grid/students-grid.component");
var student_table_component_1 = require("./students/student-table/student-table.component");
var course_grid_component_1 = require("./courses/course-grid/course-grid.component");
var grade_grid_component_1 = require("./grades/grade-grid/grade-grid.component");
var roster_table_component_1 = require("./rosters/roster-table/roster-table.component");
var roster_item_component_1 = require("./rosters/roster-item/roster-item.component");
var test_component_1 = require("./test/test/test.component");
var inline_edit_component_1 = require("./shared/inline-edit/inline-edit.component");
//Services
var student_service_1 = require("./students/student.service");
var course_service_1 = require("./courses/course.service");
var grade_service_1 = require("./grades/grade.service");
var roster_service_1 = require("./rosters/roster.service");
var student_form_component_1 = require("./students/student-form/student-form.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            inline_edit_component_1.InlineEditComponent,
            app_component_1.AppComponent,
            header_component_1.HeaderComponent,
            footer_component_1.FooterComponent,
            roster_item_component_1.RosterItemComponent,
            //StudentComponent,
            student_form_component_1.StudentFormComponent,
            student_table_component_1.StudentTableComponent,
            students_grid_component_1.StudentsGridComponent,
            course_grid_component_1.CourseGridComponent,
            grade_grid_component_1.GradeGridComponent,
            roster_table_component_1.RosterTableComponent,
            test_component_1.TestComponent,
            student_form_component_1.StudentFormComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            http_1.HttpModule,
            app_routing_module_1.AppRoutingModule
        ],
        providers: [
            student_service_1.StudentService,
            course_service_1.CourseService,
            grade_service_1.GradeService,
            roster_service_1.RosterService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map