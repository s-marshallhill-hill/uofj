"use strict";
var testing_1 = require("@angular/core/testing");
var course_service_1 = require("./course.service");
describe('CourseService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [course_service_1.CourseService]
        });
    });
    it('should ...', testing_1.inject([course_service_1.CourseService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=course.service.spec.js.map