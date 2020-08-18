import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFvrtlistDialogComponent } from './edit-fvrtlist-dialog.component';

describe('EditFvrtlistDialogComponent', () => {
  let component: EditFvrtlistDialogComponent;
  let fixture: ComponentFixture<EditFvrtlistDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFvrtlistDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFvrtlistDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
