"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var StudentComponent = (function () {
    function StudentComponent() {
    }
    StudentComponent.prototype.ngOnInit = function () {
    };
    StudentComponent.prototype.ngOnChanges = function (changes) {
        console.log("ngOnChange student component");
        console.log(changes);
    };
    StudentComponent.prototype.update = function (student) {
        console.log("updating student");
        console.log(student);
    };
    return StudentComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], StudentComponent.prototype, "student", void 0);
StudentComponent = __decorate([
    core_1.Component({
        selector: 'app-student',
        templateUrl: './student.component.html',
        styleUrls: ['./student.component.css']
    }),
    __metadata("design:paramtypes", [])
], StudentComponent);
exports.StudentComponent = StudentComponent;
//# sourceMappingURL=student.component.js.map