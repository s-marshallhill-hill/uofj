"use strict";
var testing_1 = require("@angular/core/testing");
var roster_service_1 = require("./roster.service");
describe('RosterService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [roster_service_1.RosterService]
        });
    });
    it('should ...', testing_1.inject([roster_service_1.RosterService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=roster.service.spec.js.map