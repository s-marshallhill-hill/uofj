"use strict";
var testing_1 = require("@angular/core/testing");
var grade_service_1 = require("./grade.service");
describe('GradeService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [grade_service_1.GradeService]
        });
    });
    it('should ...', testing_1.inject([grade_service_1.GradeService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=grade.service.spec.js.map