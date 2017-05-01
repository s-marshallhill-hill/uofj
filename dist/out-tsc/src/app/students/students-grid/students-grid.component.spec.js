"use strict";
var testing_1 = require("@angular/core/testing");
var students_grid_component_1 = require("./students-grid.component");
describe('StudentsGridComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [students_grid_component_1.StudentsGridComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(students_grid_component_1.StudentsGridComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=students-grid.component.spec.js.map