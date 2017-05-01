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
var grade_service_1 = require("../grade.service");
var GradeGridComponent = (function () {
    function GradeGridComponent(service) {
        this.service = service;
    }
    GradeGridComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getGrades()
            .subscribe(function (grades) { return _this.grades = grades; }, function (err) { console.log(err); });
    };
    return GradeGridComponent;
}());
GradeGridComponent = __decorate([
    core_1.Component({
        selector: 'app-grade-grid',
        templateUrl: './grade-grid.component.html',
        styleUrls: ['./grade-grid.component.css']
    }),
    __metadata("design:paramtypes", [grade_service_1.GradeService])
], GradeGridComponent);
exports.GradeGridComponent = GradeGridComponent;
//# sourceMappingURL=grade-grid.component.js.map