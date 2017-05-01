"use strict";
var testing_1 = require("@angular/core/testing");
var student_service_1 = require("./student.service");
describe('StudentService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [student_service_1.StudentService]
        });
    });
    it('should ...', testing_1.inject([student_service_1.StudentService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=student.service.spec.js.map