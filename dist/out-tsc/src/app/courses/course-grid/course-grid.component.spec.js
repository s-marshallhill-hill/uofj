"use strict";
var testing_1 = require("@angular/core/testing");
var course_grid_component_1 = require("./course-grid.component");
describe('CourseGridComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [course_grid_component_1.CourseGridComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(course_grid_component_1.CourseGridComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=course-grid.component.spec.js.map