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
var roster_service_1 = require("../roster.service");
var RosterTableComponent = (function () {
    function RosterTableComponent(service) {
        this.service = service;
    }
    RosterTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getRosters()
            .subscribe(function (rosters) { return _this.rosters = rosters; }, function (err) { console.log(err); });
    };
    return RosterTableComponent;
}());
RosterTableComponent = __decorate([
    core_1.Component({
        selector: 'app-roster-table',
        templateUrl: './roster-table.component.html',
        styleUrls: ['./roster-table.component.css']
    }),
    __metadata("design:paramtypes", [roster_service_1.RosterService])
], RosterTableComponent);
exports.RosterTableComponent = RosterTableComponent;
//# sourceMappingURL=roster-table.component.js.map