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
var student_service_1 = require("../student.service");
var StudentFormComponent = (function () {
    function StudentFormComponent(fb, service) {
        this.fb = fb;
        this.service = service;
        this.formErrors = {
            'first': '',
            'last': ''
        };
        this.validationMessages = {
            'first': {
                'required': 'First Name is required.',
                'maxlength': 'First Name cannot be more than 150 characters long.',
            },
            'last': {
                'required': 'Last Name is required.',
                'maxlength': 'Last Name cannot be more than 150 characters long.',
            },
            'address': {
                'maxlength': 'Address cannot be more than 150 characters long.',
            },
            'city': {
                'maxlength': 'City cannot be more than 50 characters long.',
            },
            'zip': {
                'maxlength': 'Zip cannot be more than 10 characters long.',
            },
            'email': {
                'invalid': 'Email address is invalid.',
            },
        };
        this.states = [
            {
                "name": "Alabama",
                "abbreviation": "AL"
            },
            {
                "name": "Alaska",
                "abbreviation": "AK"
            },
            {
                "name": "American Samoa",
                "abbreviation": "AS"
            },
            {
                "name": "Arizona",
                "abbreviation": "AZ"
            },
            {
                "name": "Arkansas",
                "abbreviation": "AR"
            },
            {
                "name": "California",
                "abbreviation": "CA"
            },
            {
                "name": "Colorado",
                "abbreviation": "CO"
            },
            {
                "name": "Connecticut",
                "abbreviation": "CT"
            },
            {
                "name": "Delaware",
                "abbreviation": "DE"
            },
            {
                "name": "District Of Columbia",
                "abbreviation": "DC"
            },
            {
                "name": "Federated States Of Micronesia",
                "abbreviation": "FM"
            },
            {
                "name": "Florida",
                "abbreviation": "FL"
            },
            {
                "name": "Georgia",
                "abbreviation": "GA"
            },
            {
                "name": "Guam",
                "abbreviation": "GU"
            },
            {
                "name": "Hawaii",
                "abbreviation": "HI"
            },
            {
                "name": "Idaho",
                "abbreviation": "ID"
            },
            {
                "name": "Illinois",
                "abbreviation": "IL"
            },
            {
                "name": "Indiana",
                "abbreviation": "IN"
            },
            {
                "name": "Iowa",
                "abbreviation": "IA"
            },
            {
                "name": "Kansas",
                "abbreviation": "KS"
            },
            {
                "name": "Kentucky",
                "abbreviation": "KY"
            },
            {
                "name": "Louisiana",
                "abbreviation": "LA"
            },
            {
                "name": "Maine",
                "abbreviation": "ME"
            },
            {
                "name": "Marshall Islands",
                "abbreviation": "MH"
            },
            {
                "name": "Maryland",
                "abbreviation": "MD"
            },
            {
                "name": "Massachusetts",
                "abbreviation": "MA"
            },
            {
                "name": "Michigan",
                "abbreviation": "MI"
            },
            {
                "name": "Minnesota",
                "abbreviation": "MN"
            },
            {
                "name": "Mississippi",
                "abbreviation": "MS"
            },
            {
                "name": "Missouri",
                "abbreviation": "MO"
            },
            {
                "name": "Montana",
                "abbreviation": "MT"
            },
            {
                "name": "Nebraska",
                "abbreviation": "NE"
            },
            {
                "name": "Nevada",
                "abbreviation": "NV"
            },
            {
                "name": "New Hampshire",
                "abbreviation": "NH"
            },
            {
                "name": "New Jersey",
                "abbreviation": "NJ"
            },
            {
                "name": "New Mexico",
                "abbreviation": "NM"
            },
            {
                "name": "New York",
                "abbreviation": "NY"
            },
            {
                "name": "North Carolina",
                "abbreviation": "NC"
            },
            {
                "name": "North Dakota",
                "abbreviation": "ND"
            },
            {
                "name": "Northern Mariana Islands",
                "abbreviation": "MP"
            },
            {
                "name": "Ohio",
                "abbreviation": "OH"
            },
            {
                "name": "Oklahoma",
                "abbreviation": "OK"
            },
            {
                "name": "Oregon",
                "abbreviation": "OR"
            },
            {
                "name": "Palau",
                "abbreviation": "PW"
            },
            {
                "name": "Pennsylvania",
                "abbreviation": "PA"
            },
            {
                "name": "Puerto Rico",
                "abbreviation": "PR"
            },
            {
                "name": "Rhode Island",
                "abbreviation": "RI"
            },
            {
                "name": "South Carolina",
                "abbreviation": "SC"
            },
            {
                "name": "South Dakota",
                "abbreviation": "SD"
            },
            {
                "name": "Tennessee",
                "abbreviation": "TN"
            },
            {
                "name": "Texas",
                "abbreviation": "TX"
            },
            {
                "name": "Utah",
                "abbreviation": "UT"
            },
            {
                "name": "Vermont",
                "abbreviation": "VT"
            },
            {
                "name": "Virgin Islands",
                "abbreviation": "VI"
            },
            {
                "name": "Virginia",
                "abbreviation": "VA"
            },
            {
                "name": "Washington",
                "abbreviation": "WA"
            },
            {
                "name": "West Virginia",
                "abbreviation": "WV"
            },
            {
                "name": "Wisconsin",
                "abbreviation": "WI"
            },
            {
                "name": "Wyoming",
                "abbreviation": "WY"
            }
        ];
    }
    StudentFormComponent.prototype.ngOnInit = function () {
        this.createForm();
    };
    StudentFormComponent.prototype.ngOnChanges = function () {
        console.log("on change");
    };
    StudentFormComponent.prototype.createForm = function () {
        var _this = this;
        this.studentForm = this.fb.group({
            first: ['', [forms_1.Validators.maxLength(150), forms_1.Validators.required]],
            last: ['', [forms_1.Validators.maxLength(150), forms_1.Validators.required]],
            address: ['', forms_1.Validators.maxLength(150)],
            city: ['', forms_1.Validators.maxLength(50)],
            state: '',
            zip: ['', forms_1.Validators.maxLength(10)],
            age: ['', forms_1.Validators.maxLength(3)],
            email: ['', forms_1.Validators.email],
            gradYear: ''
        });
        this.studentForm.valueChanges
            .subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged(); // (re)set validation messages now
    };
    StudentFormComponent.prototype.onValueChanged = function (data) {
        console.log("value changed");
        console.log(data);
        if (!this.studentForm) {
            return;
        }
        var form = this.studentForm;
        for (var field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            var control = form.get(field);
            console.log(control);
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    StudentFormComponent.prototype.prepareSaveStudent = function () {
        var formModel = this.studentForm.value;
        var student = {
            id: null,
            first: formModel.first,
            last: formModel.last,
            address: formModel.address,
            city: formModel.city,
            state: formModel.state,
            zip: formModel.zip,
            email: formModel.email,
            gradYear: formModel.gradYear,
            age: formModel.age,
        };
        return student;
    };
    StudentFormComponent.prototype.onSubmit = function () {
        this.student = this.prepareSaveStudent();
        this.service.createStudent(this.student);
    };
    return StudentFormComponent;
}());
StudentFormComponent = __decorate([
    core_1.Component({
        selector: 'app-student-form',
        templateUrl: './student-form.component.html',
        styleUrls: ['./student-form.component.css']
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, student_service_1.StudentService])
], StudentFormComponent);
exports.StudentFormComponent = StudentFormComponent;
//# sourceMappingURL=student-form.component.js.map