"use strict";
var testing_1 = require("@angular/core/testing");
var roster_table_component_1 = require("./roster-table.component");
describe('RosterTableComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [roster_table_component_1.RosterTableComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(roster_table_component_1.RosterTableComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=roster-table.component.spec.js.map