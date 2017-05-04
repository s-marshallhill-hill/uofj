import { Component, ElementRef, OnInit, Input, Output, EventEmitter, AfterContentInit } from '@angular/core';

@Component({
  selector: 'action-confirmation',
  templateUrl: './action-confirmation.component.html',
  styleUrls: ['./action-confirmation.component.css']
})
export class ActionConfirmationComponent implements OnInit, AfterContentInit {

  @Input() confirmButtonText: string = "OK";
  @Input() cancelButtonText: string = "Cancel";

  @Output() canceled: EventEmitter<any> = new EventEmitter;
  @Output() confirmed: EventEmitter<any> = new EventEmitter;
  
  public visible = false;
  private visibleAnimate = false;

  constructor(private element: ElementRef) {
    console.log("action confirmation constuctor");
  }

  ngAfterContentInit() {
    console.log(this.element);
  }

  ngOnInit() {
  }

  public show(): void {
    this.visible = true;
    setTimeout(() => this.visibleAnimate = true, 100);
  }
  public hide(): void {
    this.visibleAnimate = false;
    setTimeout(() => this.visible = false, 300);
  }
  public onContainerClicked(event: MouseEvent): void {
    console.log(event);
    // if ((<HTMLElement>event.target).classList.contains('modal')) {
    //   this.hide();
    // }
  }

  cancel() {
    console.log("cancel");
    this.canceled.emit();
    this.hide();
  }

  confirm(){
    console.log("confirm");
    this.confirmed.emit();
    this.hide();
    
  }
}
