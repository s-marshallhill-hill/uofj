"use strict";
var testing_1 = require("@angular/core/testing");
var roster_item_component_1 = require("./roster-item.component");
describe('RosterItemComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [roster_item_component_1.RosterItemComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(roster_item_component_1.RosterItemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=roster-item.component.spec.js.map