import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FvrtImagesComponent } from './fvrt-images.component';

describe('FvrtImagesComponent', () => {
  let component: FvrtImagesComponent;
  let fixture: ComponentFixture<FvrtImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FvrtImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FvrtImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
