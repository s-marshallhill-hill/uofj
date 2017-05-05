import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListViewRendererComponent } from './list-view-renderer.component';

describe('ListViewRendererComponent', () => {
  let component: ListViewRendererComponent;
  let fixture: ComponentFixture<ListViewRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListViewRendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListViewRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
