"use strict";
var protractor_1 = require("protractor");
var UOfJsonPage = (function () {
    function UOfJsonPage() {
    }
    UOfJsonPage.prototype.navigateTo = function () {
        return protractor_1.browser.get('/');
    };
    UOfJsonPage.prototype.getParagraphText = function () {
        return protractor_1.element(protractor_1.by.css('app-root h1')).getText();
    };
    return UOfJsonPage;
}());
exports.UOfJsonPage = UOfJsonPage;
//# sourceMappingURL=app.po.js.map