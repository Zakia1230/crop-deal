import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CropListComponent } from './croplist.component';

describe('CroplistComponent', () => {
  let component: CropListComponent;
  let fixture: ComponentFixture<CropListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CropListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CropListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
