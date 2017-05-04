import {
    Component,
    Input,
    Output,
    ElementRef,
    ViewChild,
    Renderer,
    forwardRef,
    EventEmitter,
    OnInit
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const INLINE_EDIT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DefaultEditor),
    multi: true
};

export class DefaultEditor implements ControlValueAccessor, OnInit {

    @ViewChild('InputControl') InputControl: ElementRef; // input DOM element

    @Input() label: string = '';  // Label value for input element
    @Input() type: string = 'text'; // The type of input element
    @Input() required: boolean = false; // Is input requried?
    @Input() disabled: boolean = false; // Is input disabled?

    private _editing: boolean = false; // Is Component in edit mode?
    @Input() 
    get editing():boolean{
        return this._editing;
    }
    set editing(isEditing: boolean){
        console.log(this.editBegin);
        console.log(this.editDone);
        console.log("editing cell");
        if (isEditing) {
            if (!this._editing){
                this.preValue = this._value;
                console.log(this.preValue);
                this._editing = true;
                this.editBegin.emit();
            }
        }
        else {
            if (this._editing){
                this._editing = false;
                this.editDone.emit();
            }
        }
    }
    @Input() editBegin: EventEmitter<any>;
    @Input() editDone: EventEmitter<any>;

    private _value: string = ''; // Private variable for input value
    private preValue: string = ''; // The value before clicking to edit

    public onChange: any = Function.prototype; // Trascend the onChange event
    public onTouched: any = Function.prototype; // Trascend the onTouch event

    // Control Value Accessors for ngModel
    @Input()
    get value(): any {
        return this._value;
    }

    set value(v: any) {
        if (v !== this._value) {
            this._value = v;
            this.onChange(v);
        }
    }

   
    constructor(element: ElementRef, private _renderer: Renderer) {
    }

    // Required for ControlValueAccessor interface
    writeValue(value: any) {
        this._value = value;
    }

    // Required forControlValueAccessor interface
    public registerOnChange(fn: (_: any) => {}): void {
        this.onChange = fn;
    }

    // Required forControlValueAccessor interface
    public registerOnTouched(fn: () => {}): void {
        this.onTouched = fn;
    }

    // Do stuff when the input element loses focus
    onBlur($event: Event) {
        this.editing = false;
    }

    // Start the editting process for the input element
    edit(value) {
        // if (this.disabled) {
        //     return;
        // }

        // this.preValue = value;
        // this.editing = true;
        // // Focus on the input element just as the editing begins
        // setTimeout(_ => this._renderer.invokeElementMethod(this.inlineEditControl.nativeElement, 'focus', []));

        //this.editBegin.emit();
        console.log("edit value");
        this.editing=true;
      //  setTimeout(_ => this._renderer.invokeElementMethod(this.InputControl.nativeElement, 'focus', []));
        
    }

    cancelEdit(){
        this._value = this.preValue;
    }

    ngOnInit() {
    }
}