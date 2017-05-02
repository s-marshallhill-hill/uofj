import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Student, StudentService } from '../student.service';

@Component({
    selector: 'app-student-form',
    templateUrl: './student-form.component.html',
    styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit, OnChanges {

    private student: Student;
    private studentForm: FormGroup;

    public states;
    
    constructor(private fb: FormBuilder, private service: StudentService) {
      this.states = service.states;
    }

    ngOnInit() {
        this.createForm();
    }

    ngOnChanges() {
        console.log("on change");
    }
    createForm() {
        this.studentForm = this.fb.group({
            first: ['', [Validators.maxLength(150),Validators.required]],
            last: ['', [Validators.maxLength(150), Validators.required]],
            address: ['', Validators.maxLength(150)],
            city: ['', Validators.maxLength(50)],
            state: '',
            zip: ['', Validators.maxLength(10)],
            age: ['', Validators.maxLength(3)],
            email: ['', Validators.email],
            gradYear: ''
        });
        this.studentForm.valueChanges
            .subscribe(data => this.onValueChanged(data));
        this.onValueChanged(); // (re)set validation messages now
    }

    onValueChanged(data?: any) {
        console.log("value changed");
        if (!this.studentForm) { return; }
        console.log(this.formErrors);

        const form = this.studentForm;
        for (const field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            const control = form.get(field);
            if (control && control.dirty && !control.valid) {
                const messages = this.validationMessages[field];
                for (const key in control.errors) {
                    console.log(key);
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    }
    formErrors = {
        'first': '',
        'last': '',
        'address': '',
        'city': '',
        'zip': '',
        'email': ''
    };
    validationMessages = {
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
            'email': 'Email address is invalid.',
        },
    };

    prepareSaveStudent(): Student {
        const formModel = this.studentForm.value;

        const student: Student = {
            id : null,
            first: formModel.first as string,
            last: formModel.last as string,
            address : formModel.address as string,
            city : formModel.city as string,
            state : formModel.state as string,
            zip : formModel.zip as number,
            email : formModel.email as string,
            gradYear: formModel.gradYear as number,
            age: formModel.age as number,

        }

        return student;
    }

    onSubmit() {
        this.student = this.prepareSaveStudent();
        this.service.createStudent(this.student);
    }
    
}
