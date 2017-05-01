"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var student_table_component_1 = require("./students/student-table/student-table.component");
var student_form_component_1 = require("./students/student-form/student-form.component");
var test_component_1 = require("./test/test/test.component");
var routes = [
    {
        path: '',
        component: test_component_1.TestComponent,
        children: []
    },
    {
        path: 'Students',
        component: student_table_component_1.StudentTableComponent,
        children: []
    },
    {
        path: 'Students/create',
        component: student_form_component_1.StudentFormComponent,
        children: []
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes), ng_bootstrap_1.NgbModule.forRoot()],
        exports: [router_1.RouterModule],
        providers: []
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map