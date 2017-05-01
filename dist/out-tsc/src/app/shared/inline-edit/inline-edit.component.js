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
var forms_1 = require("@angular/forms");
var INLINE_EDIT_CONTROL_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return InlineEditComponent; }),
    multi: true
};
var InlineEditComponent = (function () {
    function InlineEditComponent(element, _renderer) {
        this._renderer = _renderer;
        this.label = ''; // Label value for input element
        this.type = 'text'; // The type of input element
        this.required = false; // Is input requried?
        this.disabled = false; // Is input disabled?
        this._value = ''; // Private variable for input value
        this.preValue = ''; // The value before clicking to edit
        this.editing = false; // Is Component in edit mode?
        this.onChange = Function.prototype; // Trascend the onChange event
        this.onTouched = Function.prototype; // Trascend the onTouch event
    }
    Object.defineProperty(InlineEditComponent.prototype, "value", {
        // Control Value Accessors for ngModel
        get: function () {
            return this._value;
        },
        set: function (v) {
            if (v !== this._value) {
                this._value = v;
                this.onChange(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    // Required for ControlValueAccessor interface
    InlineEditComponent.prototype.writeValue = function (value) {
        this._value = value;
    };
    // Required forControlValueAccessor interface
    InlineEditComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    // Required forControlValueAccessor interface
    InlineEditComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    // Do stuff when the input element loses focus
    InlineEditComponent.prototype.onBlur = function ($event) {
        this.editing = false;
    };
    // Start the editting process for the input element
    InlineEditComponent.prototype.edit = function (value) {
        var _this = this;
        if (this.disabled) {
            return;
        }
        this.preValue = value;
        this.editing = true;
        // Focus on the input element just as the editing begins
        setTimeout(function (_) { return _this._renderer.invokeElementMethod(_this.inlineEditControl.nativeElement, 'focus', []); });
    };
    InlineEditComponent.prototype.ngOnInit = function () {
    };
    return InlineEditComponent;
}());
__decorate([
    core_1.ViewChild('inlineEditControl'),
    __metadata("design:type", core_1.ElementRef)
], InlineEditComponent.prototype, "inlineEditControl", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], InlineEditComponent.prototype, "label", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], InlineEditComponent.prototype, "type", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], InlineEditComponent.prototype, "required", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], InlineEditComponent.prototype, "disabled", void 0);
InlineEditComponent = __decorate([
    core_1.Component({
        selector: 'app-inline-edit',
        templateUrl: './inline-edit.component.html',
        providers: [INLINE_EDIT_CONTROL_VALUE_ACCESSOR],
        styleUrls: ['./inline-edit.component.css']
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer])
], InlineEditComponent);
exports.InlineEditComponent = InlineEditComponent;
//# sourceMappingURL=inline-edit.component.js.map