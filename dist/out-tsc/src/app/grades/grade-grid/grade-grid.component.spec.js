"use strict";
var testing_1 = require("@angular/core/testing");
var grade_grid_component_1 = require("./grade-grid.component");
describe('GradeGridComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [grade_grid_component_1.GradeGridComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(grade_grid_component_1.GradeGridComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=grade-grid.component.spec.js.map